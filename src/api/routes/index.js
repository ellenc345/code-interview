import express from "express";
import { appointmentsRoutes } from "./appointments.js";

export const initRoutes = (app) => {
  const router = express.Router();
  app.use("/appointments", appointmentsRoutes(router));
};
