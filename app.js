const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors()); // Enable CORS for all routes

// Use morgan for logging HTTP requests (only in development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Define the /api/v1/info route
app.get("/api/v1/info", (req, res) => {
  const response = {
    email: "codetitan2206@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Code-Linx/HNG12-Stage0-API.git",
  };
  res.status(200).json(response); // Send JSON response
});

// Optional health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
