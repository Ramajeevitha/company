import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // save in MongoDB
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("❌ Contact Save Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save contact message",
    });
  }
});

export default router;