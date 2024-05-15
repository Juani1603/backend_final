const { default: axios} = require('axios');
const Cars = require('../models/Cars');


exports.getCars = async (_, res) =>{
    const cars = await Cars.find();
    res.status(200).json(cars);
};


exports.getCarByBrand =  async (req, res) =>{
    const foundCar = await Cars.findOne({brand: req.params.brand});

    if(foundCar){
        res.status(200).json(foundCar);
    } else {
        res.status(400).json({ error: 'Marca de vehículo no encontrada.'});
    }
}

exports.insertCar = async (req, res) => {
    try{
    const newCar = await Cars.create(req.body);
    res.status(201).json({message: 'Ok', data: newCar});
    }catch(error){
        res.status(400).json({message: 'Error al ingresar los datos del vehículo: ' + error.message});
    }
}

exports.updateCarById = async (req, res) =>{
    try{
        const updatedCar = await Cars.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: 'Vehículo actualizado exitosamente.', updatedCar, data: updatedCar});
    }catch(error){
        res.status(400).json({ message: 'Error al actualizar los datos del vehículo: ' + error.message});
    }
}

exports.deleteCarByPlate = async (req, res) =>{
    try{
        const deletedCarByPlate = await Cars.findOneAndDelete({plate: req.params.plate});
        res.status(200).json({ message: 'Vehículo eliminado exitosammente.', data: deletedCarByPlate});
    }catch(error){
        res.status(500).json({ message: 'Error al eliminar el vehículo: ' + error.message});
    }
}

exports.deleteCarById = async (req, res) =>{
    try {
        const deletedCarById = await Cars.findByIdAndDelete(req.params.id); 
        if (!deletedCarById) {
            return res.status(404).json({ message: 'Vehículo no encontrado con el ID proporcionado.' });
        }
        res.status(200).json({ message: 'Vehículo eliminado exitosamente.', data: deletedCarById });
    } catch(error) {
        res.status(500).json({ message: 'Error al eliminar el vehículo: ' + error.message });
    }
}

//Cars API - Consulta el modelo de un vehículo

exports.getCarsApi = async (req, res) => {
    try {
        const model = req.params.model;
        const response = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=2&model=${model}`, {
            headers: {
                'X-Api-Key': 'Yf/Lliy6abbINXIxX1xydg==EsRXr8nVqjxTDQGj'
            }
        });
        res.status(200).json({ cars: response.data });
    } catch (error) {
        res.status(502).json({ message: 'Error al obtener los vehículos de la API: ' + error.message });
    }
};
