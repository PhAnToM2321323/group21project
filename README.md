# 📘 1. Project Information
**Project Name:** Group 21 Booking Management System  
**Group:** Group 21

**Team Members:**
| Student Name | SID |
|---------------|------|
|  — | 14105066 |
|  — | 14204695 |
|  — | 13930136 |
| Zhao Mingxian | 12987223 |
|  — | 14088213 |

---


# 2. Project file introduction:
## server.js:
This file sets up the **backend server** using the **Express.js** framework.  
**Key functionalities:**
- **Express.js setup:**  
  Runs a server to handle requests for booking and authentication.
- **Middleware:**  
  Uses `express-session` for session handling and user authentication.
- **Database Integration:**  
  Connects with **MongoDB** for CRUD operations using helper functions (insert, find, update, delete).
- **User Authentication:**  
  Includes routes for registration, login, and logout:  
  - `/register`
  - `/login`
  - `/logout`
- **Booking Management (CRUD):**  
  Includes routes for creating, editing, deleting, and viewing bookings:  
  - `/create`
  - `/edit`
  - `/delete`
  - `/details`
- **RESTful API Support:**  
  Provides JSON-format API routes for booking data.
- **Port:**  
  Default port is **8099**.

---
## package.json:
### ejs (^3.1.10)
Embedded JavaScript templating engine for rendering dynamic HTML pages.

### express (^4.21.0)
Fast, minimalist web framework for Node.js..

### express-formidable (^1.2.0)
Middleware for parsing form data, especially file uploads.

### express-session (^1.18.1)
Middleware for managing user sessions in Express apps.

### mongodb (^6.9.0)
Official MongoDB driver for Node.js, used to connect and interact with MongoDB databases.

---

## public: css folder(style.css) and js folder(script.js)
### `style.css`
Defines global styling for all pages:
- Layout and color themes (light/dark mode)
- Styles for buttons, input fields, and tables
- Ensures a clear, user-friendly UI design

### `script.js`
Provides basic frontend logic:
- Validates mobile number format
- Checks required form fields before submission
- Used for both create and edit booking forms

---

## views: Included five EJS files
These files render the frontend views for different parts of the system.

| File | Description |
|------|--------------|
| **`create.ejs`** | Displays a form for creating a new booking. Fields: gender, booking name, mobile, date, and number of guests. Includes form validation (JavaScript). |
| **`details.ejs`** | Displays detailed booking information with options to edit or delete the booking. |
| **`edit.ejs`** | Allows users to update existing booking details. Pre-fills the form with the current booking data. |
| **`list.ejs`** | Displays all bookings in a table with a search/filter feature (by ID or mobile). Each row includes "Details", "Edit", and "Delete" buttons. |
| **`login.ejs`** | Login interface where users enter their username and password. Displays error messages for invalid logins. |

---


# 3. The cloud-based server URL (your server host running on the cloud platform) for testing:
E.g., https://comp3810sef-group1.render.com/

---


# 🧭 4. Operation Guide (User Flow)

## 🔐 Login / Logout Flows

### Valid Login Information
- **Username:** A valid, registered username  
- **Password:** The password created during registration  

### Sign-In Steps
1. Navigate to **`/login`**
2. Enter your username and password
3. Click **“Sign In”**
4. On successful login → redirects to **`/find`**
5. If invalid → displays **“Invalid username or password”**

### Logout Steps
1. Click the **Logout** button (visible when logged in)
2. You’ll be logged out and redirected to **`/login`**

---

## 🧾 CRUD Operations (Booking Management)

### 🆕 Create a Booking
1. Go to **`/create`**
2. Fill out all required fields:
   - Guest Gender (Mr/Miss)
   - Booking Name
   - Mobile
   - Booking Date
   - Number of Guests
3. Click **Create**
4. Redirects to **`/find`** to view the new record

---

### 📄 Read Bookings
1. Navigate to **`/find`**
2. View all bookings in the table:
   - Columns: Name, Date, Mobile, Guests
3. Click **Details** to view individual booking info → **`/details?_id={booking_id}`**

---

### ✏️ Update a Booking
1. From the Booking Details page (**`/details?_id={booking_id}`**), click **Edit**
2. Redirects to **`/edit?_id={booking_id}`**
3. Update relevant fields (e.g. Date, Mobile, Guests)
4. Click **Update** to save changes
5. System redirects to **`/find`** with updated info

---

### ❌ Delete a Booking
1. From **`/details?_id={booking_id}`**, click **Delete**
2. A confirmation dialog appears
3. Confirm deletion ⟶ booking is removed
4. Redirects back to **`/find`**

---

## RESTful CRUD Services

The server exposes several API endpoints that provide CRUD functionality for bookings. Below are the available APIs, along with their HTTP request types and URIs.

### API Endpoints

#### Create a Booking

HTTP Method: POST

Path: /api/bookings

Request Body:

{
  "bookingid": "Mr.123",
  "mobile": "12345678",
  "bookingdate": "2025-12-01",
  "guests": 2
}


Response:

{
  "acknowledged": true,
  "insertedId": "some_id"
}

---

#### Read Bookings

HTTP Method: GET

Path: /api/bookings

Query Parameters:

bookingid (Optional): Filter bookings by ID.

mobile (Optional): Filter bookings by mobile number.

Response:

[
  {
    "_id": "some_id",
    "bookingid": "Mr.123",
    "mobile": "12345678",
    "bookingdate": "2025-12-01",
    "guests": 2
  },
  ...
]

---

#### Update a Booking

HTTP Method: PUT

Path: /api/bookings/:id

Request Body:

{
  "bookingid": "Mr.124",
  "mobile": "12345679",
  "bookingdate": "2025-12-02",
  "guests": 3
}


Response:

{
  "modifiedCount": 1
}

---

#### Delete a Booking

HTTP Method: DELETE

Path: /api/bookings/:id

Response:

{
  "deletedCount": 1
}

---

### Testing command（in Win cmd)
If use localhost, the URL is: http://localhost:8099

#### Create Method
POST Method
curl -X POST https://comp3810self-group21.onrender.com/api/bookings ^
  -H "Content-Type: application/json" ^
  -d "{\"bookingid\":\"MrChan\",\"mobile\":\"88887766\",\"bookingdate\":\"2025-11-25\",\"guests\":3}"
  
---

#### Read Method
curl -X GET https://comp3810self-group21.onrender.com/api/bookings

---

#### Update Method
curl -X PUT https://comp3810self-group21.onrender.com/api/bookings/_id ^
  -H "Content-Type: application/json" ^
  -d "{\"bookingid\":\"MissChan\",\"mobile\":\"82387766\",\"bookingdate\":\"2025-11-26\",\"guests\":7}"

---

#### Delete Method
curl -X DELETE https://comp3810self-group21.onrender.com/api/bookings/_id

---

