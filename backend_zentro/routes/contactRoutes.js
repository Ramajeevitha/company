import express from "express";
import pool from "../db.js";
import nodemailer from "nodemailer";

const router = express.Router();

/* ================= EMAIL CONFIG ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,        // your Gmail
    pass: process.env.EMAIL_APP_PASS,    // Gmail App Password
  },
});

/* ================= POST: CONTACT FORM ================= */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save message to database
    const result = await pool.query(
      `INSERT INTO contacts (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, message]
    );

    /* ================= EMAIL TO ADMIN ================= */
    await transporter.sendMail({
      from: `"Zentro Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2 style="color:#061a2f;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f4f7fb;padding:12px;border-radius:6px;">
          ${message}
        </p>
      `,
    });

    /* ================= ATTRACTIVE EMAIL TO USER ================= */
    await transporter.sendMail({
      from: `"Zentro Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ Thanks for contacting Zentro!",
      html: `
        <div style="
          max-width:600px;
          margin:auto;
          font-family:Segoe UI, Arial, sans-serif;
          background:#061a2f;
          color:#e6f0ff;
          padding:30px;
          border-radius:12px;
        ">

          <h2 style="color:#00bfff;text-align:center;">
            We’ve received your message 🚀
          </h2>

          <p>Hi <strong>${name}</strong>,</p>

          <p>
            Thank you for reaching out to <strong>Zentro</strong>.
            We truly appreciate you taking the time to contact us.
          </p>

          <div style="
            background:rgba(255,255,255,0.08);
            padding:16px;
            border-left:4px solid #00bfff;
            border-radius:8px;
            margin:20px 0;
          ">
            <p style="margin:0;"><strong>Your Message:</strong></p>
            <p style="margin-top:8px;">${message}</p>
          </div>

          <p>
            Our team has received your message and will get back to you
            as soon as possible.
          </p>

          <p style="margin-top:30px;">
            Warm regards,<br/>
            <strong style="color:#00bfff;">Zentro Team</strong>
          </p>

          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.2);margin:30px 0;"/>

          <p style="font-size:13px;color:#cfe8ff;text-align:center;">
            © ${new Date().getFullYear()} Zentro. All rights reserved.
          </p>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/* ================= GET: ALL CONTACTS (ADMIN) ================= */
router.get("/", async (req, res) => {
  try {
    const contacts = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );
    res.json(contacts.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
