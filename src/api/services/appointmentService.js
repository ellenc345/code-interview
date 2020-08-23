import fs from "fs";

const providers = JSON.parse(
  fs.readFileSync("C:/dev/vim/code-interview/providers/providers.json")
);

const appointmentService = (() => {
  const checkAvailabilityDate = (dates, date) => {
    return dates.some(
      (currDate) => currDate.from <= date && currDate.to >= date
    );
  };

  const checkSpecialties = (specialties, specialty) => {
    return specialties.find(
      (currSpe) => currSpe.toLowerCase() === specialty.toLowerCase()
    );
  };

  const getAllAvailabilityAppointments = (specialty, date, minScore) => {
    let result = providers.filter(
      (curr) =>
        curr.score >= minScore &&
        checkAvailabilityDate(curr.availableDates, date) &&
        checkSpecialties(curr.specialties, specialty)
    );

    return Promise.resolve(result);
  };

  const createAppointment = (name, date) => {
    let provider = providers.find(
      (curr) =>
        curr.name === name && checkAvailabilityDate(curr.availableDates, date)
    );

    return Promise.resolve(provider);
  };

  return {
    getAllAvailabilityAppointments,
    createAppointment,
  };
})();

export default appointmentService;
