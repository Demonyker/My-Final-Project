require('dotenv').config(); 
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
    host: 'localhost',
    dialect: 'postgres',
    }
);

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

module.exports = {
    sequelize,
    app,
}