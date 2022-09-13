const multer =  require('multer');
const uuid =  require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        const originalFilename = file.originalname;
        const nameArray = originalFilename.split('.');
        const extension =  nameArray[nameArray.length - 1];
        const newFileName =  uuid.v1() + "." + extension;
        callback(null, newFileName);
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload;