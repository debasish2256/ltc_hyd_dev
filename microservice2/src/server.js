const app = require('./app');
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Microservice 2 is running on port ${port}`);
});
