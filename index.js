require("dotenv").config()
const Server = require("./app/server")
const chalk = require('chalk')

const begin = async () => {
  await new Server(process.env.EXPRESS_PORT).start()
  console.log(`Server running in --- ${chalk.green(process.env.NODE_ENV)} --- on port ${chalk.blue(process.env.EXPRESS_PORT)}`)
}

begin()