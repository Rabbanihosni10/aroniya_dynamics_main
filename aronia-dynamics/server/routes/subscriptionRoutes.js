// server/routes/subscriptionRoutes.js

const express = require("express");
const { body } = require("express-validator");

const {
  createSubscription,
  getAllSubscriptions,
} = require("../controllers/subscriptionController");

const router = express.Router();

const subscriptionValidation = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("status")
    .optional()
    .isIn(["active", "cancelled", "pending"])
    .withMessage("Invalid subscription status"),
];

router.post(
  "/",
  subscriptionValidation,
  createSubscription
);

router.get("/", getAllSubscriptions);

module.exports = router;