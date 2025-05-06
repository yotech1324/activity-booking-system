const Activity = require("../models/Activity");


exports.registerActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const activity = new Activity({ title, description, location, date, time });
    await activity.save();

    res.status(201).json({ message: "Activity registered successfully", activity });
  } catch (err) {
    res.status(500).json({ error: "Failed to register activity" });
  }
};

exports.getActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};