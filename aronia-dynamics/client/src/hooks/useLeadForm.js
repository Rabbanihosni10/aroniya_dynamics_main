// client/src/hooks/useLeadForm.js

import { useState } from "react";
import { submitLeadForm } from "../services/leadService";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  preferredTime: "",
  message: "",
};

const useLeadForm = () => {
  const [formData, setFormData] =
    useState(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Name is required.";
    }

    if (!formData.email.trim()) {
      return "Email is required.";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      return "Phone number is required.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event?.preventDefault();

    setSuccess("");
    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return {
        success: false,
        message: validationError,
      };
    }

    setIsSubmitting(true);

    try {
      const response = await submitLeadForm(formData);

      if (response.success) {
        setSuccess(
          response.message ||
            "Your request has been submitted successfully."
        );

        setFormData(initialFormData);
      } else {
        setError(
          response.message ||
            "Unable to submit your request."
        );
      }

      return response;
    } catch (err) {
      const errorMessage =
        "Something went wrong. Please try again later.";

      setError(errorMessage);

      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isSubmitting,
    success,
    error,
  };
};

export default useLeadForm;