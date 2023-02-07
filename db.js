const db = require('mongoose');

db.Promise = global.Promise;
async function connect(url,dbName){
    db.set('strictQuery', false);
    //mongodb+srv://<DB_USER><DB_PASS>@<DB_HOST>/?retryWrites=true&w=majority      
    await db.connect( url, {       //formato MongoDB 5.0
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbName
    });
    console.log(`[db] Conectada con exito a ${dbName}`);
}

module.exports = connect;