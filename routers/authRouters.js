
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/authControllers')
const schemaValidation  =  require('../middleware/schemaValidation');
const schema = require('../schemas/authSchema'); 
const upload =  require('../middleware/fileUpload');

router.post('/login', controllers.login);

router.post('/signup',  upload.single('picture'), controllers.signUp);

module.exports = router;