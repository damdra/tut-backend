
const mongo = require('mongoose');


module.exports = async () => {
    try {
     await mongo.connect(process.env.DB_URL, {useNewUrlParser: true});    
     console.log("database connection established")
    } catch (error) {
        console.log("databse connection error: ", error)
        throw new Error(error)
    }
}