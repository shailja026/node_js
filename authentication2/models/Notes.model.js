
const mongoose = require('mongoose')

const notesScheme = mongoose.Schema({
    title : {
        type:'string',
        require:'true'
    },
    content : {
        type:'string',
        require:'true'
    },
    auther : {
        type:'string',
        require:'true'
    }
});

const notesModel = mongoose.model("note" , notesScheme);

module.exports = {
    notesModel
}