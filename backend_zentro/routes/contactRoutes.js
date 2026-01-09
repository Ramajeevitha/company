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

    const contact = await Contact.create({ name, email, message });

    await sendContactEmails({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email sending failed" });
  }
});


export default router;
