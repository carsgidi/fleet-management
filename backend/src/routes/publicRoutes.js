const express = require("express");

const {
  getPublicAvailableVehicles,
  createPublicReservation,
} = require("../controllers/publicController");
const {
  createRateLimiter,
  honeypotGuard,
} = require("../middleware/publicProtectionMiddleware");

const router = express.Router();

const vehiclesRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 60,
  keySuffix: "public-vehicles",
});

const reservationRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 10,
  keySuffix: "public-reservations",
});

router.get("/vehicles/available", vehiclesRateLimiter, getPublicAvailableVehicles);
router.post(
  "/reservations",
  reservationRateLimiter,
  honeypotGuard,
  createPublicReservation
);

module.exports = router;
