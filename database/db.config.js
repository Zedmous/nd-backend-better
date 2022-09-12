
const Sequelize = require("sequelize");
/*
const db = new Sequelize(
  process.env.NAME_DB, //dbName
  process.env.USERNAME_DB, //dbUsername
  process.env.PASSWORD_DB, //dbPassword
  {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: 'postgres'
  }
)*/

//const db = new Sequelize('postgres://postgres:8565203@localhost:5432/betterBackend')
/**/const dbConection = new Sequelize(
  'betterBackend', //dbName
  'postgres', //dbUsername
  '8565203', //dbPassword
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  }
)/**/
const sincronizar=async ()=>{
  await dbConection.sync({ force: true });
}
sincronizar();
module.exports = dbConection;