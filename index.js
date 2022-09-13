
const dbConnection =  require('./database/connection');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());

const PORT  = process.env.PORT || 3000
dbConnection();


// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for accessing file 
app.use(express.static('uploads'))


app.get('/', (req, res)=>{
    res.send("Hello World!....");
})


app.use('/api/v1/auth', require('../tut_backend/routers/authRouters'))

app.listen(PORT,
     () => {
        console.log(`server listening on ${PORT}`) 
    });


app.use(function(err, req, res, next){
    return res.send({
        status: 500,
        message: err.message,
        body:{}
    })
});