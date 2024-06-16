const app = require('./app');
const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Microservice 3 is running on port ${port}`);
});
