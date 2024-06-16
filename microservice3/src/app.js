const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use('/health', healthRoutes);

module.exports = app;
