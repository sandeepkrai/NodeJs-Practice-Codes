const http = require('http')
const express = require('express');

const app = express();

// use method is use to implement the middleware in express and the middle wares are 
// the function which are implemented within the response cycle of node.
app.use('/message',(req, res, next)=>{
    console.log("This is the middle ware");
    res.send('<h2>This is the message page!<\h2>')
    //If we are not returning a response then we should use next to move to next middleware function 
    // otherwise the function will die and no further execution happens
    //next();
})

app.use('/',(req, res, next)=>{
    console.log("This is the another middle ware")
    // This is how we send the response in Express
    // We dont need to set headers and fily type manually as Express do this for us automatically
    res.send('<h2>This is the response!<\h2>')
})

// const server = http.createServer(app);
// server.listen(3000);
// We can replace above two lines of code with the following code from express js code

app.listen(5000);
