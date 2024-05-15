const express = require("express");
const dbConnect = require("./database/dbConnect");
require('dotenv').config();

const app = express();
const PORT = 8080;

const carsRouter = require('./routes/carRoutes');

app.use(express.json());
app.use('/cars', carsRouter);

dbConnect();

app.listen(PORT, () =>{
    console.log(`App escuchando en puerto ${PORT}. Acceda a: http://localhost:${PORT}`);
});

