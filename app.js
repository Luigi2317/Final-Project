const express = require('express')
const req = require("express/lib/request")
const json = require("express/lib/response")
const res = require("express/lib/response")
const path = require("path")
const fetch = require("node-fetch")

const environment = process.env.ENVIRONMENT || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)

const app = express()

// Configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));


app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('js',express.static(path.join(__dirname,'node_modules/jquery/dist')))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
});

app.get("/Subject",(req,res)=>{
    res.sendFile(path.join(__dirname,'view/Chuck_life.jpg'))
});

app.get("/acteur",(req,res)=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resp=>resp.json())
    .then(json=>
        res.send(`<h1>${json.value}</h1>`)
        )
})

// POST /edit/5(Create)
app.post("/edit", (req, res) => {
    console.log(req.query)
    knex('films_chuck_norris') 
    .insert([
      { films_name: req.query.filmname, films_director: req.query.director, films_date:req.query.date, films_country_production:req.query.countryprod},
    ])
    .then()
    res.redirect('/')
    });
  
  //Select All(Read)
app.post("/read", (req, res) => {
    knex('films_chuck_norris')
    .then((res) => console.log(res))
});
  
  // POST /update/5(Update)
app.post("/update", (req, res) => {
    console.log(req.query)
    knex('films_chuck_norris')
        .where({  films_name: req.query.filmname })
        .update({ films_director: req.query.director })
        .then(res => console.log(res))
    res.redirect('/')
});
  
  // POST /delete/5(Delete)
  app.post("/delete", (req, res) => {
    console.log(req.query)
    knex('films_chuck_norris')
    .where({ films_name: req.query.filmname })
    .del()
    .then((res) => console.log(res))
    res.redirect('/')
  });

const port = 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})