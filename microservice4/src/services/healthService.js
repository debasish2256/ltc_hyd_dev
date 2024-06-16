exports.checkHealth = () => {
    return {
      status: 'Healthy',
      uptime: process.uptime(),
      timestamp: Date.now(),
      service: 'Microservice 4'
    };
  };
  