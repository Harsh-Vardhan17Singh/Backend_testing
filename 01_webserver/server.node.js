const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req,res) => {

   if (req.url === '/') {
     res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello ice Tea')
   }else if(req.url === '/ice-tea'){
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Thanks for ordering Iced tea, its really hot')
   }else{
    res.statusCode = 404
    res.setHeader('Content-Type','text/plain')
    res.end("404 Not Found")
   }


})

server.listen(port,hostname, () =>{
    console.log(`Server is Listening at the http://${hostname}:${port}`);
    
})