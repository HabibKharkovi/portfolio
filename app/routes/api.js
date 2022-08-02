// use async handler later

const  ContactFormController  = require('../Controllers/ContactFormController');


class Api {
 
    constructor(express) {
      this.express = express
      this.i = 0
    }
  
    init() {
      this.express.get("/api/get", (req, res) => {
        console.log("Thsi is api")
        res.send({  i: this.i })
      })

      this.express.post('/api/contact', ContactFormController.postFormData)
      this.express.get('/api/contact', ContactFormController.showFormData)
      // this.express.get('/contactsdata',ContactFormController.getData)
      this.express.post("/api/increment", (req, res) => {
        this.i++
        res.send({ i: this.i })
      })
    }
  
  
  }
  
  module.exports = Api