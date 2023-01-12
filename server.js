const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function(req,res){
     res.send('Lista de mensajes');
});
router.delete('/message', function(req,res){
     res.send('Mensaje eliminado');
});

// app.use('/', function(req,res){
//      res.send('hola');
// });

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');