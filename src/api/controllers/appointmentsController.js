import appointmentService from "../services/appointmentService.js";
import { formatResult } from "../utils.js";

const appointmentsController = (() => {
  const getAllAppointments = async (req, res, next) => {
    try {
      let appointments = [];
      let resStatus = 200;
      const { specialty, date, minScore } = req.query;

      if (!specialty || !date || !minScore || !Number.parseInt(date)) {
        resStatus = 400;
      } else {
        appointments = await appointmentService.getAllAvailabilityAppointments(
          specialty,
          date,
          minScore
        );
      }

      res.status(resStatus).send(formatResult(appointments));
    } catch (error) {
      next(error);
    }
  };

  const createAppointment = async (req, res, next) => {
    try {
      let resStatus = 200;

      const { name, date } = req.body;

      if (!name || !date) {
        resStatus = 400;
      } else {
        let result = await appointmentService.createAppointment(name, date);
        resStatus = result ? 200 : 400;
      }

      res.status(resStatus).send(formatResult());
    } catch (error) {
      next(error);
    }
  };

  return {
    getAllAppointments,
    createAppointment,
  };
})();

export default appointmentsController;
