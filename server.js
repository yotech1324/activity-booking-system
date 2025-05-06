const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const activityRoutes = require("./routes/activities");
const bookingRoutes = require("./routes/bookings");
const cors = require("cors");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors()); 

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 