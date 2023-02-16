const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

const model = mongoose.model('Message', mySchema, 'message'); 
/*
Sucede que en el curso al usar Message, mongoose utiliza el plural messages, para forzar el nombre
    se añade el deseado de la coleccion en el 3er campo
**/
module.exports = model;