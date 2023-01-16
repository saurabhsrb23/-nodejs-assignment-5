// const http = require("http");
const express=require('express');

const app=express()
const port=8081

// const httpServer = http.createServer(handleServer).listen(port,()=>{
//     console.log(`working at ${port} port`)
// });


// function handleServer(req, res) {
   
//     if (req.url === '/welcome') {
//         res.writeHead(200,{
//             'Content-Type':'text/plain'
//         })
//         res.write('welcome123')
//         res.end()
//     }
  
  
// }

app.get('/welcome',(req,resp)=>{
    resp.status(200).send('Welcome to Dominos!')
})
app.get('/contact',(req,resp)=>{
    resp.status(200).send(`
    
            phone: '18602100000',<br>
            email: 'guestcaredominos@gmail.com' 
           
    `)
})
app.get('*',(req,resp)=>{
    resp.status(404).send('Page Not Found')
})
app.listen(port)