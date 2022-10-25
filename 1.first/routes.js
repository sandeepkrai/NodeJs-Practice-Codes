// This module used to write file
const fs = require('fs');

const requestHandeler = (req, res)=>{
     const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter data</title><head>');
        res.write('<body><form action = "/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method==='POST'){
        const body = [];
        //Here on is used to listen to some events
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // There are two ways of writing file 1. writeFile and 2. writeFileSync in writeFileSync code is blocked until the file is written
            // but we dont want that so we use writeFile and use a callBack fuction to execute the code after writting the file without blocking the 
            // execution
            fs.writeFile('message.txt', message, callBack =>{
                res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            });
            
        })
        
        

    }

    //Response handelling
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>first Page</title><head>');
    res.write('<body> the body of server</body>');
    res.write('</html>')
    res.end();
}

module.exports.handler = requestHandeler;