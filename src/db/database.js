
const { Sequelize } = require("sequelize")

const db = new Sequelize("bpnapi", "root", '11223344', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = db;
