const lowerCase = (req, res, next) => {
    if (req.body.brand) {
        req.body.brand = req.body.brand.toLowerCase();
    }
    if (req.body.model) {
        req.body.model = req.body.model.toLowerCase();
    }
    next();
};

module.exports = lowerCase;
