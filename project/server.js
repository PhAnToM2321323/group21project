const express = require('express');
const app = express();
const fs = require('node:fs/promises');
const formidable = require('express-formidable');
const session = require('express-session');

app.use(express.json());
app.use(session({
    secret: 'change-this-to-a-strong-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

const { MongoClient, ObjectId } = require('mongodb');
const mongourl = 'mongodb+srv://Testing1:Xixinvshen1@cluster0.lsbezaq.mongodb.net/?appName=Cluster0';//Write down your mongodb url
const client = new MongoClient(mongourl);
const dbName = 'group_project';
const BOOKINGS = 'bookings';
const USERS = 'users';

// ---------- Database helper functions ----------
const insertOne = async (col, doc) => {
    return await client.db(dbName).collection(col).insertOne(doc);
};

const find = async (col, crit = {}) => {
    return await client.db(dbName).collection(col).find(crit).toArray();
};

const updateOne = async (col, crit, upd) => {
    return await client.db(dbName).collection(col).updateOne(crit, { $set: upd });
};

const deleteOne = async (col, crit) => {
    return await client.db(dbName).collection(col).deleteOne(crit);
};

// ---------- Middleware ----------
const requireLogin = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/login');
};

// ---------- User Register/Login ----------
app.get('/register', (req, res) => res.render('register'));
app.post('/register', formidable(), async (req, res) => {
    await client.connect();
    const exists = await find(USERS, { username: req.fields.username });
    if (exists.length) {
    req.session.error = "Username is already taken!";
    return res.redirect("/login");
}
    await insertOne(USERS, {
        username: req.fields.username,
        password: req.fields.password 
    });
    res.redirect('/login');
});

app.get("/login", (req, res) => {
  const error = req.session.error || "";
  req.session.error = null;
  res.render("login", { error });
});

app.post('/login', formidable(), async (req, res) => {
    await client.connect();
    const user = await find(USERS, {
        username: req.fields.username,
        password: req.fields.password
    });
    
    if (user.length) {
        req.session.user = user[0].username;
        return res.redirect('/');
    }
   
    req.session.error = "Invalid username or password!";
    res.redirect("/login");
});

app.get('/logout', requireLogin, (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
});

app.get('/', requireLogin, (req, res) => res.redirect('/find'));

// ---------- Bookings CRUD ----------
app.get('/create', requireLogin, (req, res) => res.render('create', { user: req.session.user }));
app.post('/create', requireLogin, formidable(), async (req, res) => {
    await client.connect();
    const doc = {
        bookingid: req.fields.gender + "." + req.fields.bookingid,
        mobile: req.fields.mobile,
        bookingdate: req.fields.bookingdate,
        guests: parseInt(req.fields.guests)
    };
    await insertOne(BOOKINGS, doc);
    res.redirect('/find');
});

app.get('/find', requireLogin, async (req, res) => {
    await client.connect();
    const crit = {};
    if (req.query.bookingid) crit.bookingid = req.query.bookingid;
    if (req.query.mobile) crit.mobile = { $regex: req.query.mobile, $options: 'i' };
    const docs = await find(BOOKINGS, crit);
    res.render('list', { user: req.session.user, nBookings: docs.length, bookings: docs });
});

app.get('/details', requireLogin, async (req, res) => {
    await client.connect();
    const doc = await find(BOOKINGS, { _id: new ObjectId(req.query._id) });
    if (!doc.length) return res.redirect('/find');
    res.render('details', { user: req.session.user, booking: doc[0] });
});

app.get('/edit', requireLogin, async (req, res) => {
    await client.connect();
    const doc = await find(BOOKINGS, { _id: new ObjectId(req.query._id) });
    if (!doc.length) return res.redirect('/find');
    res.render('edit', { user: req.session.user, booking: doc[0] });
});

app.post('/update', requireLogin, formidable(), async (req, res) => {
    await client.connect();
    await updateOne(
        BOOKINGS,
        { _id: new ObjectId(req.fields._id) },
        {
            bookingid: req.fields.gender + "." + req.fields.bookingid, // 姓氏+性別
            mobile: req.fields.mobile,
            bookingdate: req.fields.bookingdate,
            guests: parseInt(req.fields.guests) // 確保是數字
        }
    );
    res.redirect('/find');
});

app.get('/delete', requireLogin, async (req, res) => {
    await client.connect();
    await deleteOne(BOOKINGS, { _id: new ObjectId(req.query._id) });
    res.redirect('/find');
});

// ---------- RESTful API for BOOKINGS (JSON only, no formidable) ----------

// READ (GET all bookings or by bookingid)
app.get('/api/bookings', async (req, res) => {
    await client.connect();
    const crit = {};
    if (req.query.bookingid) crit.bookingid = req.query.bookingid;
    const docs = await find(BOOKINGS, crit);
    res.json(docs);
});

// CREATE (POST new booking)
app.post('/api/bookings', async (req, res) => {
    await client.connect();
    const r = await insertOne(BOOKINGS, req.body);
    res.status(201).json(r);
});

// UPDATE (PUT booking by id)
app.put('/api/bookings/:id', async (req, res) => {
    await client.connect();
    const r = await updateOne(BOOKINGS, { _id: new ObjectId(req.params.id) }, req.body);
    r.modifiedCount ? res.json(r) : res.status(404).json({ message: 'Booking not found' });
});

// DELETE (DELETE booking by id)
app.delete('/api/bookings/:id', async (req, res) => {
    await client.connect();
    const r = await deleteOne(BOOKINGS, { _id: new ObjectId(req.params.id) });
    r.deletedCount ? res.json(r) : res.status(404).json({ message: 'Booking not found' });
});


// ---------- Start Server ----------
const port = process.env.PORT || 8099;
app.listen(port, () => {console.log(`Listening at http://localhost:${port}`);});
