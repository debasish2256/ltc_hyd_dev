const healthService = require('../services/healthService');

exports.getHealthStatus = (req, res) => {
  const healthStatus = healthService.checkHealth();
  res.status(200).json(healthStatus);
};
