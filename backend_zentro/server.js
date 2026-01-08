import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(
  cors({
    origin: "*", // allow all origins (safe for API)
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api/contact", contactRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("Zentro Backend Running 🚀");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
