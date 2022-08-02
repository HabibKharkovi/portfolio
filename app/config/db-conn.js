const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const uri = 'mongodb://docker:mongopw@localhost:55000';
const client = new MongoClient(uri)

mongoose.connect(uri)
    .then(() => 
        console.log("Connected")
    )
    .catch(e => console.error("erorr"))
function run() {
    try {
        client.connect()

        return client.db("northJs").command({ping: 1})
        console.log("Connected successfully to server")
    }finally {[
 client.close()
    ]}
}
module.exports= run;
// run()
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

// const db =mongoose.connection;
// if(db.readyState== 1) {
//     console.log("connected")
// } else if(db.readyState== 2) {
//     console.log('connecting')
// }
// db.on('error', console.error.bind(console, 'DB connection error'))


