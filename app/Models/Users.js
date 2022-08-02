const Mongoose = require('mongoose')

const { Schema } = Mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true,'Email is required']
    }, 
    subject: {
        type: String,
        required: [true, 'Subject is required']
    },
    message: {
        type: String,
        required: [true, 'Please entner your message']
    }

});

module.exports = Mongoose.model('User', UserSchema);