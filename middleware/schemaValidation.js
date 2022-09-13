

const constants =  require('../constants');

validateSchema = (data, schema) => {
    let {error,value} = schema.validate(data, {convert:false});
  
    if(error){
        console.log(`result `, error.message)
        return error;
    }
    return null;
}


module.exports.validateBody =  (schema) => {

    return (req, res, next) => {
        let error = validateSchema(req.body, schema);
        let response = {...constants.defaultResponse}
       
        if(error){
            console.log("checking error ", error.message)
            response.body =  error.message;
            response.message = "Invalid fields"
            return res.status(response.status).send(response);
        }
        return next();
    }
}