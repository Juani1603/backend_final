const { validationResult } = require("express-validator");


const validate = (req, res, next) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        const extratedErrors = [];
        errores.array().map(error=>extratedErrors.push({[error.type]: error.msg}));

        return res.status(400).json({ message: 'Error de validación', errors: extratedErrors});
    }else{
        next();
    }
}

module.exports = validate;