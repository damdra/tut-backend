
const constants = require('../constants')
const authService = require('../services/authServices');




module.exports.signUp = async (req, res) => {
 
    let response = {...constants.defaultResponse};
    try {
        var file = req.file != null ?  req.file.filename : "";
        const resp = await authService.signUp({
             username:req.body.username,
             email:req.body.email,
             password:req.body.password,
             picture:file,
             imei:req.body.imei,
             deviceType: req.body.deviceType
        });
        response.status = 200
        response.body = resp
        response.message = "New user created successfully"
    } catch (error) {
        console.log("testing error ctl "+ error)
        response.message = error.message
    }
    return   res.status(response.status).send(response)
}


module.exports.login = async (req, res) => {
 
    let response = {...constants.defaultResponse};
    try {
        const res = await authService.login(req.body);
        response.status = 200
        response.body = res
        response.message = "login successful"
    } catch (error) {
        response.message = error.message
    }

    return  res.status(response.status).send(response);
}