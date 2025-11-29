# 1. Project info: 
Project name:
Group info: group 21
student name and SID:
14105066
14204695
13930136
Zhao Mingxian 12987223
14088213


# 2. Project file intro:
server.js (Backend Server)
Express.js setup: A server using the Express.js framework. It supports user authentication (registration, login, logout), booking management (create, edit, delete, view), and basic database operations with MongoDB.
Middleware: Implements session handling and user login verification with .express-session
Database operations: Includes helper functions to interact with MongoDB (insert, find, update, delete).
User registration and login: Handles user authentication with routes for registration (), login (), and logout ()./register/login/logout
Bookings management: CRUD operations for bookings at routes like , , , and . It also includes RESTful API routes for bookings in JSON format./create/edit/delete/details
Server start: The server listens on port 8099 by default, handling requests and responding with appropriate views.

EJS Template Files
These files represent various views (UI components) rendered for different parts of the booking system.
create.ejs: The form to create a new booking, including fields for gender, booking name, mobile, date, and number of guests. It includes basic form validation using JavaScript.
details.ejs: Displays the details of a booking, including the ability to edit or delete the booking.
edit.ejs: Allows users to update the booking details. It provides a form pre-filled with the current booking information.
list.ejs: Shows a list of bookings with the option to search and filter them. It includes a table displaying each booking's name, date, mobile number, guests, and actions (view details, edit, delete).
login.ejs: Handles user login with a form for entering a username and password. It includes error handling for invalid login attempts.
style.css: Defines the general styling for the web pages. It includes layout and color theme settings (light/dark mode) for a visually appealing interface.

JavaScript Files
script.js: Contains simple form validation logic for mobile number format and required fields in the booking creation and editing forms.
style.css: Defines the appearance of the login, registration, and booking pages. It includes styles for buttons, input fields, and layouts, ensuring that the interface is user-friendly.

Functionality Overview:
User Authentication: Users can register, log in, and log out, with proper session management.
Booking Management: Users can create, update, delete, and view details of bookings.
Search and Filtering: The application allows searching for bookings based on booking ID or mobile number.
RESTful API: The backend provides REST API routes for interacting with booking data in JSON format.
This setup indicates that the application is designed for managing bookings and user interactions, potentially for a restaurant or another service that handles reservations.


# 3. The cloud-based server URL 
https://comp3810self-group21.onrender.com/


# 4. Operation guides (like a user flow) for your server
## 1. Login/Logout Pages
Valid Login Information:
- Username: A valid username, unique and registered in the system.
- Password: The password associated with the username, entered at the time of registration.

Sign-in Steps:
Go to the Login Page ()./login
Enter a valid username and password in the respective fields.
Click the Sign In button to authenticate.
If login is successful, the user will be redirected to the Find Bookings page ()./find
If authentication fails, an error message will be displayed (e.g., "Invalid username or password").

Logout Steps:
Click the Logout button, which is visible once the user is logged in.
Upon clicking, the user will be logged out and redirected to the Login page ()./login

## 2. CRUD Web Pages (Booking Management)
These pages allow users to manage bookings (Create, Read, Update, Delete). Each action is mapped to specific buttons/UI elements.
Create a Booking:
Go to the Create Booking Page ()./create
Fill out the form with the required details:
Guest Gender (Mr/Miss)
Booking Name
Mobile
Booking Date
Number of Guests
Click the Create button to submit the form.
The system will create a new booking and redirect to the Find Bookings page ()./find

Read Bookings:
Go to the Find Bookings Page ()./find
Here, you will see a list of all bookings displayed in a table.
Each row shows: Booking Name, Date, Mobile, and Guests.
Click on the Details button in any booking row to view more details about the booking. This takes you to the Booking Details Page ()./details?_id={booking_id}

Update a Booking:
In the Booking Details Page (), click the Edit button./details?_id={booking_id}
This redirects you to the Edit Booking Page ()./edit?_id={booking_id}
Update the necessary fields (e.g., Mobile, Booking Date, Guests).
Click the Update button to save changes.
The system will update the booking and redirect to the Find Bookings page.

Delete a Booking:
In the Booking Details Page (), click the Delete button./details?_id={booking_id}
A confirmation prompt will appear to confirm the deletion.
If confirmed, the booking will be deleted, and the user will be redirected to the Find Bookings page.

## 3. RESTful CRUD Services
























# 🧭 Group 21 Booking Management System

**Course:** COMP3810 — Cloud Application Development  
**Group:** 21  

---

## 🧑‍💻 1. Project Info

**Project Name:** Group 21 Booking Management System

**Group Members:**
| Student Name | SID |
|---------------|------|
| *(Hidden)* | 14105066 |
| *(Hidden)* | 14204695 |
| *(Hidden)* | 13930136 |
| Zhao Mingxian | 12987223 |
| *(Hidden)* | 14088213 |

---

## 🗂️ 2. Project File Introduction

### **Backend: `server.js`**
A backend built with **Express.js** and **MongoDB**, supporting:
- **User Authentication** (Register / Login / Logout)
- **Booking Management** (Create, Read, Update, Delete)
- **Session Handling** using `express-session`
- **RESTful JSON APIs** for bookings

**Key Features:**
- Express setup with routing for authentication and CRUD.
- MongoDB helper functions (insert, find, update, delete).
- Server runs on **port 8099** by default.

---

### **Frontend (EJS Templates)**

| File | Description |
|------|--------------|
| `create.ejs` | Form for creating a new booking (with validation for gender, name, mobile, date, guests). |
| `details.ejs` | Shows booking details with **Edit** and **Delete** buttons. |
| `edit.ejs` | Allows editing a booking (prefilled with the current info). |
| `list.ejs` | Displays all bookings in a searchable table format. |
| `login.ejs` | Login form with error handling for authentication. |

---

### **Other Files**

| File | Description |
|------|--------------|
| `style.css` | Defines modern and user-friendly styling (supports light/dark themes). |
| `script.js` | Provides client-side validation for form input (e.g., mobile format). |

---

## ⚙️ Functionality Overview

| Feature | Description |
|----------|--------------|
| **User Authentication** | Register, login, and logout with session management. |
| **Booking Management** | Create, edit, delete, and view booking details. |
| **Search & Filter** | Find bookings using booking ID or mobile number. |
| **REST API** | JSON endpoints for programmatic access. |

> 💡 This system can be adapted for any reservation-related service, such as restaurants or event booking.

---

## ☁️ 3. Cloud-Based Server

**Live Deployment:**  
[https://comp3810self-group21.onrender.com/](https://comp3810self-group21.onrender.com/)

---

## 🧭 4. Operation Guide

### **1️⃣ Login & Logout**

**Login Steps:**
1. Navigate to **`/login`**.  
2. Enter a valid **username** and **password**.  
3. Click **Sign In** to authenticate.  
4. On success → Redirected to **`/find`**.  
5. On failure → Error message: *"Invalid username or password."*

**Logout Steps:**
- Click **Logout** after signing in.  
- You’ll be redirected to **`/login`** again.

---

### **2️⃣ Booking Management (CRUD Actions)**

| Action | Route | Description |
|---------|--------|-------------|
| **Create** | `/create` | Fill the booking form (Gender, Name, Mobile, Date, Guests) and click *Create*. |
| **Read** | `/find` | Displays all bookings in a table format. Click **Details** for a single booking view. |
| **Update** | `/edit?_id={booking_id}` | Modify details and click *Update* to save. |
| **Delete** | `/details?_id={booking_id}` | Click *Delete* to remove, with confirmation prompt. |

---

new
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
## package.json: lists of dependencies, …!!!




##public: css folder(style.css) and js folder(script.js)
### `style.css`
Defines global styling for all pages:
- Layout and color themes (light/dark mode)
- Styles for buttons, input fields, and tables
- Ensures a clear, user-friendly UI design

---
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


# 4. Operation guides (like a user flow) for your server
- Use of Login/Logout pages: a list of valid login information, sign-in steps? …
- Use of your CRUD web pages: which button or UI is used to implement create, read,
update, and delete?
- Use of your RESTful CRUD services: the lists of APIs? HTTP request types? Path URI?
How to test them? CURL testing commands?


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


#### Delete a Booking

HTTP Method: DELETE

Path: /api/bookings/:id

Response:

{
  "deletedCount": 1
}

### Testing command
#### GET Method
curl -X GET https://comp3810self-group21.onrender.com/api/bookings

#### POST Method
curl -X POST https://comp3810self-group21.onrender.com/api/bookings ^
  -H "Content-Type: application/json" ^
  -d "{\"bookingid\":\"MrChan\",\"mobile\":\"88887766\",\"bookingdate\":\"2025-11-25\",\"guests\":3}"

#### PUT Method
curl -X PUT https://comp3810self-group21.onrender.com/api/bookings/6925bab69e563d031c9fe0bb ^
  -H "Content-Type: application/json" ^
  -d "{\"bookingid\":\"MissChan\",\"mobile\":\"82387766\",\"bookingdate\":\"2025-11-26\",\"guests\":7}"

####Delete Method
curl -X DELETE https://comp3810self-group21.onrender.com/api/bookings/6925b6019e563d031c9fe0b6

