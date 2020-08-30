var appointmentsData = require("./../../../providers/providers.json");
var moment = require("moment");
// move to consts
const MIN_TRESHHOLD = 9.0;

async function appointments(speciality, avalibility) {
  return (
    appointmentsData
      .filter((apointment) => apointment.score >= MIN_TRESHHOLD)
      .filter((appointment) =>
        appointment.specialties.includes(capitalize(speciality))
      )
      .filter((appointment) => {
        const { from, to } = appointment.availableDates;
        return moment(avalibility).isBetween(moment(from), moment(to));
      })
      // todo sort
      .map((provider) => provider.name)
  );
}

module.exports = { appointments };
