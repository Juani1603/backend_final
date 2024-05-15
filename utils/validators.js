const {body} = require('express-validator');


exports.brand = body('brand')
    .notEmpty().withMessage('Ingresa la marca del vehículo.')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('La marca solo puede contener letras.');


exports.model = body('model')
    .notEmpty().withMessage('Ingrese el modelo del vehículo.');


exports.year = body('year')
    .notEmpty().withMessage('Ingrese el año del vehículo')
    .isNumeric().withMessage('El año debe ser numérico.')
    .isLength({ min: 4, max: 4 }).withMessage('El año debe tener 4 dígitos.');


exports.plate = body('plate')
    .notEmpty().withMessage('Ingresa la patente del vehículo.')
    .matches(/^[A-Z]{2}\s\d{3}\s[A-Z]{2}$/).withMessage('El formato de la patente es inválido.');


exports.mileage = body('mileage')
    .isNumeric().withMessage('El kilometraje debe ser numérico.');


exports.transmission = body('transmission')
    .isIn(['automatic', 'manual']).withMessage('La transmisión debe ser "automatic" o "manual".');    