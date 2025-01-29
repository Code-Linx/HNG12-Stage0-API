# HNG12 Stage 0

This project is a simple RESTful API that returns basic information about the developer, including an email address, current date and time in ISO 8601 format, and the GitHub URL of the project's codebase.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)

## Description

This is a simple Express.js API built for the HNG12 internship. The API provides the following information:

- The registered email of the developer.
- The current date and time in ISO 8601 format.
- The GitHub URL where the project is hosted.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Code-Linx/HNG12-Stage0-API.git

   ```

2. **Navigate to the project directory:**

   ```
   cd HNG12-Stage0-API

   ```

3. **Install the dependencies:**

   ```
   npm install
   ```

4. **Set up environment variables: Create a .env file in the root of the project and add the following variables:**

   ```
   PORT=3000
   NODE_ENV=development
   ```

5. **SRun the application:**

   ```
   npm start
   ```

## API Documentation

```
Endpoint URL:
GET /api/v1/info - Returns the developer's email, current datetime, and GitHub URL.

Request:

Method: GET

URL: /api/v1/info



```

1. **Response (200 OK)**

```

{
"email": "codetitan2206@gmail.com",
"current_datetime": "2025-01-30T09:30:00Z",
"github_url": "https://github.com/Code-Linx/HNG12-Stage0-API.git"
}

```

2. **Example Usage:**
   a. **Making a GET request using curl:**

```
curl http://localhost:3000/api/v1/info
```

b. **Response:**

```
{
  "email": "codetitan2206@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Code-Linx/HNG12-Stage0-API.git"
}

```
