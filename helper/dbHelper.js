const mongoose = require('mongoose');


module.exports.formatData = (data) => {
    if(Array.isArray(data)){
        let dataList = [];
        for(value of data){
            return dataList.push(value.toObject());
        }
        return dataList;
    }
    return data.toObject();
}

module.exports.CheckId = (id, CustomError)=> {
    if(mongoose.Types.ObjectId.isValid(id)){
        throw new Error(`${CustomError} Does not exist`);
    }
}