const express = require("express");
const router = express.Router();
const { getActivities, registerActivity } = require("../controllers/activityController");

// Public: Get all activities
router.get("/", getActivities);

// Public/Admin: Register a new activity
router.post("/register", registerActivity);

module.exports = router;
