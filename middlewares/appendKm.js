const appendKm = (req, res, next) => {
    if (req.body.mileage && typeof req.body.mileage === 'number') {
        req.body.mileage = `${req.body.mileage} km`;
    }
    next();
};

module.exports = appendKm;
