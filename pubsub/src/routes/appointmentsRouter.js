var express = require("express");
var router = express.Router();

var { appointmentsController } = require("../controllers");

const { getAppointments } = appointmentsController;

router.get("/:speciality/:avalibility", getAppointments);

module.exports = router;
