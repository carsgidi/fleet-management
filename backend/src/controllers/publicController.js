const bookingService = require("../services/bookingService");
const { getAvailableVehicles } = require("./vehicleController");

async function createPublicReservation(req, res, next) {
  try {
    const reservation = await bookingService.createPublicReservation(req.body);
    res.status(201).json({ data: reservation });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPublicAvailableVehicles: getAvailableVehicles,
  createPublicReservation,
};
