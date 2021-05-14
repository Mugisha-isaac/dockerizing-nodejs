const express = require('express');
const router = express.Router();
const db = require('../database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgress', process.env.DB_USER ||'postgress',process.env.DB_PASSWORD || '', {
    host:process.env.DB_HOST || 'localhost',
    port:process.env.DB_PORT || 5432,
    dialect:'postgress',
    dialectOptions:{
        ssl:process.env.DB_SSL == "true"
    }
});

const Person = sequelize.define('Person',{
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports = {
    sequelize:sequelize,
    Person:Person
}

