const express = require('express');
const app = express();
const port = 3000;

// Define the todos array
let todos = [];

// Body parsing middleware
app.use(express.json());

// Import the todos router and pass the todos array as a parameter
const getTodo = require('./getTodo')(todos);

// Use the todos router for all requests to /todos
app.use('/', getTodo);

// Start the server
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});