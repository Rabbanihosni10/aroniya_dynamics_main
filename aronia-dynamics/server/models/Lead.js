// server/models/Lead.js

const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
    },

    company: {
      type: String,
      trim: true,
    },

    service: {
      type: String,
      enum: [
        "App Dev",
        "Web Dev",
        "AI Systems",
        "Data Analytics",
        "SEO",
        "Networking",
        "System Design",
        "Consultancy",
      ],
      trim: true,
    },

    preferredTime: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening"],
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
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

module.exports = mongoose.model("Lead", leadSchema);