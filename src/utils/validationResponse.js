const { validationResult } = require("express-validator");
const responseMessage = require("./response.msg");

exports.checkValidation = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).send(responseMessage('Invalid Request', 'Error', [], errors.array()))
    }
    next()
}