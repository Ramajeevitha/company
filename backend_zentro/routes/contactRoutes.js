import express from "express";
import pool from "../db.js";

const router = express.Router();

/* POST: Save contact form */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newContact = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    res.status(201).json({
      success: true,
      data: newContact.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

/* GET: Fetch all contacts (admin use) */
router.get("/", async (req, res) => {
  try {
    const contacts = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );
    res.json(contacts.rows);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
