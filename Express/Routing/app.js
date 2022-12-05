const http = require('http')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');


// This is used to parse the body recieved from the response
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
})

app.listen(3000);
