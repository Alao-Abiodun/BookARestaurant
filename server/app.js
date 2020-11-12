const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const restaurantRoutes = require('./routes/restaurant.route');

const { PORT } = process.env;

const app = express();

app.use(express.json());

const port = PORT || 3002;

app.use('/api/v1', restaurantRoutes);

app.listen(port, () => {
  console.log(`The app running on the PORT ${port}`);
});
