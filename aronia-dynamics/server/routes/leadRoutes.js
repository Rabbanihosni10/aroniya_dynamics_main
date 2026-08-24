// server/routes/leadRoutes.js

const express = require("express");
const {
  body,
} = require("express-validator");

const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

const leadValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required"),

  body("service")
    .optional()
    .isIn([
      "App Dev",
      "Web Dev",
      "AI Systems",
      "Data Analytics",
      "SEO",
      "Networking",
      "System Design",
      "Consultancy",
    ])
    .withMessage("Invalid service"),

  body("preferredTime")
    .optional()
    .isIn(["Morning", "Afternoon", "Evening"])
    .withMessage("Invalid preferred time"),
];

router.post("/", leadValidation, createLead);

router.get("/", getAllLeads);

router.get("/:id", getLeadById);

router.put(
  "/:id",
  [
    body("status")
      .isIn(["new", "contacted", "converted"])
      .withMessage("Invalid lead status"),
  ],
  updateLeadStatus
);

router.delete("/:id", deleteLead);

module.exports = router;