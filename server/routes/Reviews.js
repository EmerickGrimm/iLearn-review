const express = require ('express')
const router = express.Router()
const {Reviews} = require ('../models/')


router.get("/", async (req, res)=> {
    const listOfReviews = await Reviews.findAll()
    res.json(listOfReviews)
})


router.post("/", async (req, res) =>{
    const review = req.body
    await Reviews.create(review)
    res.json(review)
})

module.exports = router