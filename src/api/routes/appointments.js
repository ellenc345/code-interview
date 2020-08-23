import appointmentsController from "../controllers/appointmentsController.js";

export const appointmentsRoutes = (router) => {
  router.get("/", appointmentsController.getAllAppointments);
  router.post("/", appointmentsController.createAppointment);

  return router;
};
