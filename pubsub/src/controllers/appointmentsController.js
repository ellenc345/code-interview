var { dataService } = require("../services");

const getAppointments = async (req, res, next) => {
  try {
    const { speciality, avalibility } = req.params;
    // todo - check schema validity - joi
    const result = await dataService.appointments(speciality, avalibility);
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

module.exports = { getAppointments };
