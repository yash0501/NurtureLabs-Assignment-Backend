const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const fetch = require("node-fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));

const config = require("./config");

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true})
const User = require("./models/user_login");

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/user/register", (req, res)=>{
    res.render("user_register.ejs");
})

app.post("/user/register", async (req, res)=>{
    //console.log(req.body);
    const newUser = new User(req.body);

    try {
        await newUser.save();
        res.send(newUser);
    } catch(err){
        res.status(500).send(err);
    }
    //console.log(newUser);
    /*User.create(newUser)
    .then((err, user)=>{
        if(err){
            console.log("This is error");
            console.log(err);
            res.redirect("/user/register");
        }
        else{
            console.log("Inserted to db successfully")
            console.log(user);
            res.redirect("/user/register");
        }
    })*/
    /*.then((user)=>{
        console.log(user)
        res.redirect("/user/register")
    })
    .catch((err)=>{
        console.log(err)
        res.redirect("/user/register")
    })*/
    
    //res.redirect("/user/register");
})

app.listen(3000, ()=>{
    console.log("App listening to Port 3000");
})