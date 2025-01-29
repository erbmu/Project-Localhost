const express = require("express");
const db = require("../db");
const router = express.Router();

// Fetch user profile by user ID
router.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const [rows] = await db.query(
      "SELECT firstName, lastName, email, bio FROM UserProfile WHERE UserLoginid = ?",
      [userId]
    );

    if (rows.length > 0) {
      res.json({ success: true, user: rows[0] });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
