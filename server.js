const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./db');
const router = require('./network/routes');
//npm i dotenv, esta libreria lee el archivo .env, subire un .env.example para que puedan alimentar su base de datos.
require('dotenv').config({ path: ".env" });
const urlMongo = {
    dbHost : process.env.DB_HOST,                     
    dbName : process.env.DB_NAME,                       
    dbUser : encodeURIComponent(process.env.DB_USER),
    dbPass : encodeURIComponent(process.env.DB_PASS)
};
const url = `mongodb+srv://${urlMongo.dbUser}:${urlMongo.dbPass}@${urlMongo.dbHost}/?retryWrites=true&w=majority`;//formato MongoDB 5.0
db(url,urlMongo.dbName);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 


router(app); //app.use(router); 

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');