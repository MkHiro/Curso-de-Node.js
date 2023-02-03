const express = require('express');
const bodyParser = require('body-parser'); 
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 


router(app); //app.use(router); 

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');