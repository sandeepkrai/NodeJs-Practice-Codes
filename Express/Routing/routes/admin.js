const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method = "POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
});

router.post('/product', (req, res, next)=>{
    console.log(JSON.stringify(req.body)); 
    res.redirect('/');
})

module.exports = router;