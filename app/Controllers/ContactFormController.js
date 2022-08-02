const UserSchema = require('../Models/Users');

//  get model also here from models mongoose.model('sadf)

const { MongoClient } = require('mongodb');
const keys = require('../config/keys');
const { json } = require('express');
const { database } = keys;
const Admin = require('../Models/Admin')

class ContactFormController {
    constructor() {
        // const { name, email, subject, message}  = getFormData();
    }
    static async postFormData(req, res) {
            const { name, email, subject, message}  = req.body
            // console.log(`Name: ${name} \n Email : ${email} \n Subject: ${subject} \n Message: ${message}`)
            try {
                const newUser = new UserSchema();
                newUser.name = name
                newUser.email = email
                newUser.subject = subject
                newUser.message = message
                MongoClient.connect(database.url, (err, client) => {
                    const db = client.db('northJs')
                    db.collection('User').insertOne(newUser, (err, resp) => {
                        if(err) throw err
                    })
                })
            } catch(err) {
                res.status(400).json({
                    error: 'Your request not processsed. try again'
                })
            }
    }

    static async showFormData(req, res) {
        const { name, email, subject, message}  = req.body
        
        try {
            MongoClient.connect(database.url, (err, client) => {
                const db = client.db('northJs')
                const cols = db.collection('User')
                cols.find({}).toArray((err, result) => {
                    
                    if(err) res.send(err)
                    else {
                        res.send(result)
                    }
                })
            })
        } catch(er) {
            console.log(er)
        }
    }  
}

module.exports= ContactFormController;