
const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    picture: String,
    imei:String,
    deviceType:String
},  {
    timestamps: true,
    toObject:{
        transform: function(doc, ret,options){
            ret.id = ret._id;
            delete  ret._id;
            delete  ret.__v;
            return ret;
        }
    }
})


module.exports = mongoose.model('Auth', authSchema);