const bodyParser = require('body-parser');
const path = require('path')
const favicon = require('serve-favicon');
const cors = require('cors');
const session = require('express-session')
const passport = require('passport')

class Middleware {
  constructor(express) {
    this.express = express
  }

  async init() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
    this.express.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')));
    this.express.use(session({
      secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
    }));
    this.express.use(passport.initialize());
    this.express.use(passport.session());
    this.initErrors()
  }

  initErrors() {
    this.express.use(async (err, req, res, next) => {
      /* This will be the first error handler to be called */
      console.error("Unexpected error")
      return next(err)
    })
  }

}

module.exports = Middleware