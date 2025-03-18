# Customer Database Management System

This project is a CRUD (Create, Read, Update, Delete) API for managing customer records using Node.js, Express, and MongoDB.

## Features
- Add a new customer record
- Retrieve all customer records
- Update customer details
- Delete a customer record

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

## Installation
### Clone the Repository:
```sh
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd customer-database-api
```

### Install Dependencies:
```sh
npm install
```

### Set Up MongoDB:
```
Use a local MongoDB instance or create a MongoDB Atlas database.
Update the MongoDB connection URI in your main file (e.g., server.js)
  
  ```
### Run the Server:
```sh
npm start
```
The API will start on `http://localhost:3000` (or the specified port in the `.env` file).

## API Endpoints

### **1. Create a New Customer**
**Endpoint:** `POST /customers`

#### Request Body (JSON):
```json
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "phone": "9876543210",
  "address": "123 Main St, NY",
  "age": 30
}
```

#### Response:
```json
{
  "message": "Customer added successfully",
  "customer": {
    "_id": "65a8b5f60c44a35b12cd784a",
    "name": "Alice Smith",
    "email": "alice@example.com",
    "phone": "9876543210",
    "address": "123 Main St, NY",
    "age": 30
  }
}
```

### **2. Get All Customers**
**Endpoint:** `GET /customers`

#### Response:
```json
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
```

### **3. Update Customer Details**
**Endpoint:** `PUT /customers/:id`

#### Request Body (JSON):
```json
{
  "phone": "9876543211",
  "address": "456 Elm St, NY"
}
```

#### Response:
```json
{
  "message": "Customer updated successfully",
  "updatedCustomer": {
    "_id": "65a8b5f60c44a35b12cd784a",
    "phone": "9876543211",
    "address": "456 Elm St, NY"
  }
}
```

### **4. Delete a Customer**
**Endpoint:** `DELETE /customers/:id`

#### Response:
```json
{
  "message": "Customer deleted successfully"
}
```

## Project Structure
```
customer-database-api/
│── models/
│   ├── customer.js  # Mongoose model for Customer
│── routes/
│   ├── customers.js # Express routes for CRUD operations
│── server.js        # Main server file
│── .env             # Environment variables (MongoDB URI, Port)
│── package.json     # Dependencies and scripts
│── README.md        # Documentation
```

## Dependencies
- **Express** - Web framework for Node.js
- **Mongoose** - ODM for MongoDB
- **dotenv** - Loads environment variables from `.env`
- **Nodemon** (for development)

## Testing the API
You can test the API using:
- **Postman** – Send HTTP requests to test endpoints.
- **cURL** – Use command-line HTTP requests:
  ```sh
  curl -X GET http://localhost:3000/customers
  ```

## License
This project is open-source and available under the MIT License.

---
This README provides a clear overview of the API with improved structure, security, and testing instructions. Let me know if you need further modifications! 🚀

