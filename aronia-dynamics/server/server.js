const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Added this!

const leadRoutes = require("./routes/leadRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ─────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Aronia Dynamics API is running",
    environment: process.env.NODE_ENV || "development",
  });
});

app.use("/api/leads", leadRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// ─── 404 & Error Handlers ──────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error" });
});

// ─── Safe Database Connection ──────────────────────
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    console.log("⚠️ Server is running WITHOUT database. (Update your .env file to fix this).");
  }
};

// ─── Start Server ──────────────────────────────────
const startServer = async () => {
  await connectDB(); // Tries to connect, but won't crash if it fails
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();