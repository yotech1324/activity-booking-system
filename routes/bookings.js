const express = require("express");
const router = express.Router();
const { bookActivity, getMyBookings } = require("../controllers/bookingController");
const auth = require("../middlewares/authMiddleware");

router.post("/book", auth, bookActivity);
router.get("/myBooking", auth, getMyBookings);

module.exports = router;
  