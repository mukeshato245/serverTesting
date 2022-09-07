const express = require('express')
const router = express.Router()

router.get('/second',(req, res)=>{
    return res.send("this is router")
})

module.exports = router