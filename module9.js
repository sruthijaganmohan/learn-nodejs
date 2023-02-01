const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req);
    if (req.url === '/') {
        res.end("welcome to our home page")
    }
    if (req.url === '/about') {
        res.end("here is our short history")
    }
    res.end(`<h1>404 error</h1>
    <a href="/">back home</a>`)
}) 

server.listen(5000)