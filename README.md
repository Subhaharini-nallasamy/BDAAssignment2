Customer Database Management System
This project is a CRUD (Create, Read, Update, Delete) API for managing customer records using Node.js, Express, and MongoDB.

Features
Add a new customer record
Retrieve all customer records
Update customer details
Delete a customer record
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (local or cloud-based, e.g., MongoDB Atlas)
Installation
Clone the repository:

git clone https://github.com/Subhaharini-nallasamy/BigDataAnalysisAssignment2
cd customer-database-api
Install dependencies:

npm install
Set up MongoDB:

Use a local MongoDB instance or create a MongoDB Atlas database.
Update the MongoDB connection URI in your main file (e.g., server.js).
Run the server:

npm start
The API will start on http://localhost:3000 (or the specified port).

API Endpoints
Create a New Customer
POST /customers/add

Request Body (JSON):
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "phone": "9876543210",
  "address": "123 Main St, NY",
  "age": 30
}
Response:
201 Created - "Customer added successfully"

Get All Customers
GET /customers

Response:
[
  {
    "_id": "65a8b5f60c44a35b12cd784a",
    "name": "Alice Smith",
    "email": "alice@example.com",
    "phone": "9876543210",
    "address": "123 Main St, NY",
    "age": 30
  }
]
Update Customer Details
PUT /customers/update/:id

Request Body (JSON):
{
  "phone": "9876543211",
  "address": "456 Elm St, NY"
}
Response:
200 OK - "Customer updated successfully"

Delete a Customer
DELETE /customers/delete/:id

Response:
200 OK - "Customer deleted successfully"

Project Structure
customer-database-api/
│── models/
│   ├── customer.js  # Mongoose model for Customer
│── routes/
│   ├── customers.js # Express routes for CRUD operations
│── server.js        # Main server file
│── package.json     # Dependencies and scripts
│── README.md        # Documentation
Dependencies
Express - Web framework for Node.js
Mongoose - ODM for MongoDB
Nodemon (for development)
License
This project is open-source and available under the MIT License.

This README provides a clear overview of your API for easy setup and use. Let me know if you need any modifications!
