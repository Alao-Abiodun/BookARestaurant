const express = require('express');

const router = express.Router();

const RestaurantCtrl = require('../controllers/restaturant.controller');

router.post('/restaurants', RestaurantCtrl.addRestaurant);
router.get('/restaurants', RestaurantCtrl.getAllRestaurant);
router.get('/restaurants/:id', RestaurantCtrl.getARestaurant);
router.put('/restaurants/:id', RestaurantCtrl.editARestaurant);
router.delete('/restaurants/:id', RestaurantCtrl.removeARestaurant);

module.exports = router;
