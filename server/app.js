const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const restaurantRoutes = require('./routes/restaurant.route');

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(cors());

const port = PORT || 3002;

app.use('/api/v1', restaurantRoutes);

app.listen(port, () => {
  console.log(`The app running on the PORT ${port}`);
});
