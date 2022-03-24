const express = require ('express')
const router = express.Router()
const {Users} = require ('../models')


router.get("/getUserByID", async (req, res)=> {
    const user = await Users.findOne({where: {fbID: req.body.id}})
    
    console.log(user)
    
    res.json(user)
})


router.post("/createUser", async (req, res) =>{
    const user = req.body
    await Users.create(user)
    res.json(user)
})

module.exports = router