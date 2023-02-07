const db = require('mongoose');
const Model = require('./model');
//npm i dotenv, esta libreria lee el archivo .env, subire un .env.example para que puedan alimentar su base de datos.
require('dotenv').config();
const config = {
    dbHost : process.env.DB_HOST,                     //no es necesario
    dbName : process.env.DB_NAME,                       
    dbUser : encodeURIComponent(process.env.DB_USER),
    dbPass : encodeURIComponent(process.env.DB_PASS)
};
db.Promise = global.Promise;
db.set('strictQuery', false);
//mongodb+srv://<DB_USER><DB_PASS>@<DB_HOST>/?retryWrites=true&w=majority                                          //formato MongoDB 5.0
db.connect(`mongodb+srv://${config.dbUser}:${config.dbPass}@${config.dbHost}/?retryWrites=true&w=majority`,{       //formato MongoDB 5.0
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: config.dbName
});
console.log('[db] Conectada con exito a telegrom');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter = { user: filterUser};
    }
    const messages = await Model.find(filter);
    return messages;
}
async function updateText(id,message){
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}