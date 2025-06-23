const express = require("express");
const connectDB = require("./configs/db");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json({ extended: false }));

// connect Database
connectDB();
app.get("/", (req, res) => res.send("API running"));

// define routes
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
