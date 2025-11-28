# group21project
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
Username: A valid username, unique and registered in the system.
Password: The password associated with the username, entered at the time of registration.

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

## 🧩 System Architecture (Simplified)
