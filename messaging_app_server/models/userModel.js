const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, minLength: 3, maxLength: 25},
    password: {type: String, required: true, minLength: 5, maxLength: 25}
})

module.exports = mongoose.model('User', UserSchema);