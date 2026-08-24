// server/controllers/subscriptionController.js

const { validationResult } = require("express-validator");
const Subscription = require("../models/Subscription");

const createSubscription = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      planName,
      email,
      company,
      status,
    } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const subscription = await Subscription.create({
      planName,
      email,
      company,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: subscriptions.length,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSubscription,
  getAllSubscriptions,
};