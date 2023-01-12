const express = require('express');
const bodyParser = require('body-parser'); 
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(router);


router.get('/message', function(req,res){
     res.send('Lista de mensajes');
});
router.delete('/message', function(req,res){
     console.log(req.query);
     console.log(req.body);
     res.send('Mensaje ' + req.body.text + ' añadido correctamente')
});

// app.use('/', function(req,res){
//      res.send('hola');
// });

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');