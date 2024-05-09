// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

// Initialize Express app
const app = express();

// Use JSON body parser middleware
app.use(bodyParser.json());

// Middleware function
const middlewareFunction = (req, res, next) => {
  // Middleware logic
  console.log(`Incoming ${req.method} request to ${req.url}`);
  next();
};

// Using middleware
app.use(middlewareFunction);

// Serve static files (e.g., HTML, CSS, JS)

// Routes
// Define your API routes here
// Import otpValidation route handler
const otpValidationRouter = require('./routes/otpValidation');

// Use otpValidation route handler
app.use('/api/otp', otpValidationRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
