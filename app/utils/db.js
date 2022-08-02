require('dotenv').config({ override: true })
const mongoose = require('mongoose')
const chalk = require('chalk')

const keys = require('../config/keys')
const { database } = keys;

const setUpDB = async () => {
    try {
        // connection
        mongoose
            .connect(database.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
            })
            .catch(err => console.log(`${chalk.red(err)}`))
    } catch (error) {
        console.error(error);
        return null;
    } 
}

module.exports = setUpDB;