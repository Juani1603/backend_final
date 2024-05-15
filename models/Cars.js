const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    plate: {                
        type: String,        //Para el formato de la patente, usé el formato de las patentes argentinas, respetando los espacios y las mayúsculas.
        required: true       //Ej: AE 448 TQ    - Podes verificar la lógica para mas claridad en validators.js
    },    

    mileage: {
        type: String,
    },

    transmission:{
        type: String,
        enum: ['automatic', 'manual']
    },

    carImage: {
        type: String,
        default: 'https://demodev.autocornertestdrive.com/graphics/nopic.png?1698251915'
    },

}, {timestamps: true});

const Cars = model('Car', carSchema);

module.exports = Cars;