# group21project


1. server.js (Backend Server)
Express.js setup: A server using the Express.js framework. It supports user authentication (registration, login, logout), booking management (create, edit, delete, view), and basic database operations with MongoDB.
Middleware: Implements session handling and user login verification with .express-session
Database operations: Includes helper functions to interact with MongoDB (insert, find, update, delete).
User registration and login: Handles user authentication with routes for registration (), login (), and logout ()./register/login/logout
Bookings management: CRUD operations for bookings at routes like , , , and . It also includes RESTful API routes for bookings in JSON format./create/edit/delete/details
Server start: The server listens on port 8099 by default, handling requests and responding with appropriate views.

2. EJS Template Files
These files represent various views (UI components) rendered for different parts of the booking system.
create.ejs: The form to create a new booking, including fields for gender, booking name, mobile, date, and number of guests. It includes basic form validation using JavaScript.
details.ejs: Displays the details of a booking, including the ability to edit or delete the booking.
edit.ejs: Allows users to update the booking details. It provides a form pre-filled with the current booking information.
list.ejs: Shows a list of bookings with the option to search and filter them. It includes a table displaying each booking's name, date, mobile number, guests, and actions (view details, edit, delete).
login.ejs: Handles user login with a form for entering a username and password. It includes error handling for invalid login attempts.
style.css: Defines the general styling for the web pages. It includes layout and color theme settings (light/dark mode) for a visually appealing interface.

3. JavaScript Files
script.js: Contains simple form validation logic for mobile number format and required fields in the booking creation and editing forms.
style.css: Defines the appearance of the login, registration, and booking pages. It includes styles for buttons, input fields, and layouts, ensuring that the interface is user-friendly.

Functionality Overview:
User Authentication: Users can register, log in, and log out, with proper session management.
Booking Management: Users can create, update, delete, and view details of bookings.
Search and Filtering: The application allows searching for bookings based on booking ID or mobile number.
RESTful API: The backend provides REST API routes for interacting with booking data in JSON format.
This setup indicates that the application is designed for managing bookings and user interactions, potentially for a restaurant or another service that handles reservations.
