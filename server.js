const express = require("express");
const { read, fstat } = require("fs");
const fs=require("fs");

const app = express()

const PORT = 3000;

app.use(express.static('static'))

app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/trending",(req,res)=>{
    res.render("trending")
})
app.get("/subscription",(req,res)=>{
    res.render("subscription")
})
app.get("/movies",(req,res)=>{
    res.render("movies")
})
app.post("/subscription",(req,res)=>{

    console.log(req.body)
    var name=req.body.name;
    var password=req.body.password;
    var contact=req.body.contact;
    var email=req.body.Email;
    var message=req.body.Message;
    console.log(name, password, contact, email, message);

    var UserData=`Name: ${name}
    Password: ${password}
    Contact: ${contact}
    Email: ${email}
    Message: ${message}`
    console.log(UserData)

    var oldData= fs.readFileSync('users.text','utf-8')

    var totalData=`${UserData}
    
    ${oldData}`

    fs.writeFileSync('users.text', totalData);
    
    res.render("subscription")
})

app.listen(PORT)