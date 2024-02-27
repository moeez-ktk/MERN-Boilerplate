// const { handleErrors } = require("./middleware/loggingMiddleware");
// const { verifyToken } = require("./middleware/authMiddleware");
// const { validateRequest } = require("./middleware/validationMiddleware");
const express = require("express");
const dbConnection = require("./configs/dbConfig");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

// MONGODB CONNECTION
dbConnection();

// Middleware
app.use(express.json());
app.use(cors());
// app.use("/api", verifyToken);
// app.use(handleErrors);

// Routes
app.use("/posts", postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
