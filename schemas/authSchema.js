const joi = require('joi');

module.exports.loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
})

module.exports.signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    imei: joi.string().required(),
    deviceType: joi.string().required()
})