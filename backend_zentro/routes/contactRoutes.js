import express from "express";
import Contact from "../models/Contact.js";
import { sendContactEmails } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    await Contact.create({ name, email, message });

    // Send emails via Brevo
    await sendContactEmails({ name, email, message });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    res.status(500).json({ success: false });
  }
});

export default router;
