const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password : { // ofc will need to be encrypted
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema);
