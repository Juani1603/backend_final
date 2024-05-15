const mongoose =  require('mongoose');

const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexión exitosa.');
    }catch(error){
        console.log('Error en la conexión con la base de datos: '+error.message);
    }
}

module.exports = dbConnect;