const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json({ extended: false }));

// connect Database
connectDB();
app.get("/", (req, res) => res.send("API running"));

// define routes
//const userRoutes = require("./routes/user");
const summitRoutes = require("./routes/summit");
const speakerRoutes = require("./routes/speaker");
const mindfulnessActivityRoutes = require("./routes/mindfulnessActivity");
const contactRequestRoutes = require("./routes/contactRequest");
//app.use("/api/users", userRoutes);
app.use("/api/summits", summitRoutes);
app.use("/api/speakers", speakerRoutes);
app.use("/api/mindfulness-activities", mindfulnessActivityRoutes);
app.use("/api/contact-requests", contactRequestRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
