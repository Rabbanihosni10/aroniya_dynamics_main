// client/src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitLead = async (data) => {
  const response = await api.post("/leads", data);
  return response.data;
};

export const getLeads = async () => {
  const response = await api.get("/leads");
  return response.data;
};

export const submitSubscription = async (data) => {
  const response = await api.post(
    "/subscriptions",
    data
  );
  return response.data;
};

export const getSubscriptions = async () => {
  const response = await api.get("/subscriptions");
  return response.data;
};

export default api;