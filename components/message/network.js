const express = require('express');
const multer = require('multer');
const path = require("path");
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

var storage = multer.diskStorage({  //Para agregar las extenciones del archivo (.jpg) 
    destination: function (req, file, cb) {
      cb(null, 'public/files/') //la carpeta que recibe las imagenes 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //aqui extrae la extencion del nombre original 
    }
  })

const upload = multer({
    storage: storage
});

router.get('/', function (req, res) {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', upload.single('file'), function (req, res) { 

    console.log(req.file);

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);    
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
        });
});
router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;