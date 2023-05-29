const express = require("express");
const router = new express.Router();
require("./db/conn");
const Register = require("./model/register");
const Subscribe = require("./model/subscribe")

router.get("/",(req,res) =>{
    res.send("Welcome into server")
})
router.post("/api/insert",async(req,res) =>{
    try{
        
        const registerEmployee = new Register({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })

        const registered = await registerEmployee.save()
    }catch(error){
        res.status(400).send(error)
    }
})

router.post("/api/subscription",async(req,res) =>{
    try{
        const subscribeNew = new Subscribe({
            email: req.body.subscription
        })

        const subscribed = await subscribeNew.save()
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router;