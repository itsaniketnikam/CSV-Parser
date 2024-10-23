const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config'); // Use your config file with database settings

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'postgres',
    port: config.development.port
  }
);

const Purchase = require('./purchase')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Purchase
};
