// server/models/Subscription.js

const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "cancelled", "pending"],
      default: "pending",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "Subscription",
  subscriptionSchema
);