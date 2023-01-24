const list = [];

function addMessage(message){
    list.push(message);
}

function getMessages(message){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}