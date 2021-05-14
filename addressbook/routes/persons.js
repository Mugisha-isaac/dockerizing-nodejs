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

router.get("/:id",(req,res)=>{
    db.Person.findByPk(req.params.id).then(person=>{
        res.status(200).send(JSON.stringify(person));
    }).catch(err=>{
        res.send(500).status(JSON.stringify(err));
    })
});

router.put("/",(req,res)=>{
    db.Person.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        id:req.body.id
    }).then(person=>{
        res.status(2001).send(JSON.stringify(person));
    }).catch(err=>{
        res.status(500).send(JSON.stringify(err));
    })
});

router.delete("/:id",(req,res)=>{
    db.Person.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).send();
    }).catch(err=>{
        res.status(500).send(JSON.stringify(err));
    })
})

module.exports = router;