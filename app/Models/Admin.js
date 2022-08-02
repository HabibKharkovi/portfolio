const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: String,
    password: String,
});

// Export model
AdminSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Admin', AdminSchema)