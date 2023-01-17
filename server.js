const express = require('express');
const bodyParser = require('body-parser'); 

const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(router);


router.get('/message', function(req,res){
     console.log(req.headers);
     res.header({
          "custom-header": "nuestro valor personalizado",
     });
     response.success(req,res,'Lista de mensajes');
});
router.post('/message', function(req,res){
     console.log(req.query);
     if(req.query.error == "ok"){
          response.error(req,res,'Error simulado',400);
     }else{
          response.success(req,res,'Creado correctamente',201);
     }
     //res.status(201).send({error:'', body:'Creado correctamente',}); //res.send('Mensaje ' + req.body.text + ' añadido correctamente');
     
});

// app.use('/', function(req,res){
//      res.send('hola');
// });

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');