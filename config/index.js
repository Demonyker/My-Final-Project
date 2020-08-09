const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/tmp/database.db'
});

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

module.exports = {
    sequelize,
    app,
}