var express = require("express")
var app = express()

app.get("/",(req,res)=>{
    res.status(200).send("hi this is root api")
})

app.get("/product",(req,res)=>{
    res.status(200).send("hi this is product api")
})
var port = 3000
app.listen(port,()=>{
    console.log("server running")
})