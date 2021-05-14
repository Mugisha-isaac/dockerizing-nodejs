const express = require('express');
const router = express.Router();
const db = require('../database');

router.get("/all",(req,res)=>{
    db.Person.findAll().then(persons=>{
        res.status(200).send(JSON.stringify(persons));
    }).catch(err=>{
        res.status(500).send(JSON.stringify(err));
    })
});

router.get('/')