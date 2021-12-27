const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    partipants: [{
        type: String,
        required: true,}],
    messages: [{
        type: String,
        required: true,
        minLenght: 1,
        maxLength: 140,
        author: {type: String, required: true},
        created_at: {type: Date, default: Date.Now()}
    }]
})
module.exports = mongoose.model('Chat', ChatSchema)

