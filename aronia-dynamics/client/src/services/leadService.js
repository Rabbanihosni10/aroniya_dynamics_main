// client/src/services/leadService.js

import { submitLead } from "./api";

export const submitLeadForm = async (formData) => {
  try {
    const requiredFields = [
      "name",
      "email",
      "phone",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !formData[field] ||
        formData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      return {
        success: false,
        message: "Please fill in all required fields.",
        errors: missingFields,
      };
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        errors: ["email"],
      };
    }

    const response = await submitLead({
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company?.trim() || "",
      message: formData.message?.trim() || "",
    });

    return {
      success: true,
      message:
        response.message ||
        "Your request has been submitted successfully.",
      data: response.data,
    };
  } catch (error) {
    if (!error.response) {
      return {
        success: false,
        message:
          "Unable to connect to the server. Please check your internet connection and try again.",
      };
    }

    return {
      success: false,
      message:
        error.response.data?.message ||
        "Something went wrong while submitting your request.",
      errors:
        error.response.data?.errors || [],
    };
  }
};