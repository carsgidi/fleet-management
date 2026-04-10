const ipBuckets = new Map();

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }

  return req.ip || req.socket?.remoteAddress || "unknown";
}

function createRateLimiter({ windowMs, maxRequests, keySuffix = "default" }) {
  return (req, res, next) => {
    const now = Date.now();
    const ip = getClientIp(req);
    const key = `${ip}:${keySuffix}`;

    const existing = ipBuckets.get(key);

    if (!existing || now >= existing.resetAt) {
      ipBuckets.set(key, {
        count: 1,
        resetAt: now + windowMs,
      });
      return next();
    }

    existing.count += 1;

    if (existing.count > maxRequests) {
      const retryAfterSeconds = Math.ceil((existing.resetAt - now) / 1000);
      res.setHeader("Retry-After", String(Math.max(retryAfterSeconds, 1)));

      const error = new Error("Too many requests. Please try again later.");
      error.statusCode = 429;
      return next(error);
    }

    return next();
  };
}

function honeypotGuard(req, res, next) {
  const trapValue = req.body?.website;
  if (typeof trapValue === "string" && trapValue.trim() !== "") {
    const error = new Error("Invalid request");
    error.statusCode = 400;
    return next(error);
  }

  return next();
}

module.exports = {
  createRateLimiter,
  honeypotGuard,
};
