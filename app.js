const express = require('express')
const req = require("express/lib/request")
const json = require("express/lib/response")
const res = require("express/lib/response")
const path = require("path")
const fetch = require("node-fetch")

const app = express()

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('js',express.static(path.join(__dirname,'node_modules/jquery/dist')))

app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname,'view/index.html'))
});

app.get("/Subject",(req,res)=>{
    res.sendfile(path.join(__dirname,'view/Capture vr.PNG'))
});

app.get("/acteur",(req,res)=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resp=>resp.json())
    .then(json=>
        res.send(`<h1>${json.value}</h1>`)
        )
})

const port = 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})