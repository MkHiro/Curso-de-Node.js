const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    users:[{ type: Schema.ObjectId, ref: User}] 
});

const model = mongoose.model('Chat', mySchema, 'Chat'); 
/*
Sucede que en el curso al usar Message, mongoose al tomar la colleccion utiliza el plural messages, para forzar el nombre
    se añade el nombre deseado de la coleccion en el 3er campo
**/
module.exports = model;