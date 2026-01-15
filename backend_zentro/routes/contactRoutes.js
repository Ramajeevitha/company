import express from "express";
import Contact from "../models/Contact.js";
import { sendContactEmails } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, message });

    // Send emails (NON-BLOCKING SAFE)
   await sendContactEmails({ name, email, message });


    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
