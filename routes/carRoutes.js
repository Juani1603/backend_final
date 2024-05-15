const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars.controllers');
const appendKm = require('../middlewares/appendKm');
const lowerCase = require('../middlewares/lowerCase');
const validate = require('../middlewares/validate');
const {brand, model, year, plate, mileage} = require('../utils/validators');

router.get('/', carsController.getCars);
router.get('/carapi/:model', carsController.getCarsApi);
router.get('/brands/:brand', carsController.getCarByBrand);

router.post('/create', [brand, model, year, plate, mileage], validate, lowerCase, appendKm, carsController.insertCar);

router.put('/update/:id', [brand, model, year, plate, mileage], validate, lowerCase, appendKm, carsController.updateCarById);

router.delete('/delete/:plate', carsController.deleteCarByPlate);
router.delete('/delete/byid/:id', carsController.deleteCarById);

module.exports = router;