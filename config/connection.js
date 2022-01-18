// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();
// create connection to our database, pass in your MySQL information for username and password ('just_tech_news_db', 'username', 'PW', {...
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // original: host: 'localhost'
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});



module.exports = sequelize;