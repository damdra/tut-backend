
const authModel  = require('../database/models/authModel');
const bcrypt = require("bcrypt")
const {formatData, CheckId } = require('../helper/dbHelper');


module.exports.signUp = async ({username, email,password,picture, imei, deviceType}
    ) => {
    try {
        console.log("testing data email", email)
        const  user =  await authModel.findOne({email:email});
        if(user){
            throw new Error('User already exists');
        }
        var pass = await bcrypt.hash(password, 12);
        var res = await authModel({username, email,picture,imei, deviceType});
        console.log(res)
         res.password = pass;
         var result = await res.save();
        return formatData(result);
    } catch (error) {
        console.log("error auth signUp service "+ error);
        throw new Error(error);
    }

}


module.exports.login = async (data) => {
    try {
        let user =  await authModel.findOne({email:data.email});
        if(!user){
            throw new Error('User not found');
        }
        var verify = await bcrypt.compare(data.password, user.password);

        if(!verify){
            throw new Error('Invalid password');
        }
        return formatData(user);
    } catch (error) {
        console.log("error auth login service "+ error);
        throw new Error(error.message);
    }

}