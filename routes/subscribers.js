const express = require('express');
const router = express.Router();

//Model
const Subscriber = require('../models/Subscrib');

router.get("/get_subscriber", (req,res) =>{
    Subscriber.find((err, items) =>{
        if (err){
            console.log(err);
            res.end();
        } else{
            res.send(items);
            res.end();
        }
    });
});


router.post("/register", (req,res) =>{
    if ((req.body.name !== null) && (req.body.lastname !== null) && (req.body.mail !== null)  && (req.body.reason !== null)){
        const newSubscriber = new Subscriber ({
            "name": req.body.name,
            "lastname": req.body.lastname,
            "mail" : req.body.mail, 
            "reason": req.body.reason
        });
        newSubscriber.save().then((item) => {
            res.status(201).json(item).end();
        }).catch(error => {
        console.log(error);
            res.status(500).end();
        });
    }
});

module.exports = router;