const express = require("express")
const app = express();

app.get("/", (request, response)=>{
    response.send('Welcome to the world of Node.js- Naresh i Technologies')
})

app.get("/student", (request, response)=>{
    response.json([
        {name: 'scott', city: 'boston', age:42},
        {name: 'Adam', city: 'Sidney', age:43},
        {name: 'Tuan', city: 'London', age:40}
    ] )
})

app.get("/uma", (request, response)=>{
    response.send('This is Uma - I am your trainer')
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server Listening at PORT ', PORT)
})


