const db = require('mongoose');
const Model = require('./model');
//mongodb+srv://db_user_Hiro:ibNtpYbxVnhpvlHa@cluster0.tup9ujd.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://db_user_Hiro:<password>@cluster0.tup9ujd.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://<user><password>@cluster0.tup9ujd.mongodb.net/?retryWrites=true&w=majority
db.Promise = global.Promise;
db.set('strictQuery', false);
db.connect('mongodb+srv://db_user_Hiro:ibNtpYbxVnhpvlHa@cluster0.tup9ujd.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'telegrom'
});
console.log('[db] Conectada con exito a telegrom');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    //return list;
    const messages = await Model.find();
    return messages;
}
async function updateText(id,message){
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //update
    //delete
}