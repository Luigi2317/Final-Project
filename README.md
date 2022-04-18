# Assignment 2
## Descritpion of the project
>In this assignment I create two endpoint:
>the first is a static endpoint which give a picture

```
app.get("/Subject",(req,res)=>{
    res.sendfile(path.join(__dirname,'view/Capture vr.PNG'))
});
```

>and the second a dynamic endpoint which give some jokes about Chuck Norris

```
app.get("/acteur",(req,res)=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resp=>resp.json())
    .then(json=>
        res.send(`<h1>${json.value}</h1>`)
        )
})
```
