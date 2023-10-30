const multer = require('multer');
const path = require('path');

const upload = multer ({
    fileFilter: function(req, file, cb){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            console.log('Todo bien por aqui: ' + file.mimetype);
            cb(null, true);
        } else{
            console.log('solo se aceptan archivos jpg o png y este es: ' + file.mimetype);
            cb(null, false);
        }
    }
})

module.exports = upload;