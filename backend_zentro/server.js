import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* ================= CORS FIX ================= */
app.use(
  cors({
    origin: [
      "https://company-git-main-ramajeevithas-projects.vercel.app", // ✅ your real frontend
      "https://company-chi-lemon.vercel.app",                      // (keep if used)
      "http://localhost:5173",                                     // local dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// IMPORTANT: handle preflight requests
app.options("*", cors());

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api/contact", contactRoutes);

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
