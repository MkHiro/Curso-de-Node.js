const express = require('express');

const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
         "custom-header": "nuestro valor personalizado",
    });
    response.success(req,res,'Lista de mensajes');
});

router.post('/', function(req,res){
    console.log(req.query);
    if(req.query.error == "ok"){
         response.error(req,res,'Error inesperado',500,'Es solo una simulacion de los errores');
    }else{
         response.success(req,res,'Creado correctamente',201);//res.status(201).send({error:'', body:'Creado correctamente',}); //res.send('Mensaje ' + req.body.text + ' añadido correctamente');
    }
});

module.exports = router;