const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const fetch = require("node-fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));

const config = require("./config");

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true,
useFindAndModify:true})
const User = require("./models/user_login");
const Advisor = require("./models/advisor_register.js");

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/user/register", (req, res)=>{
    res.render("user_register.ejs");
})

app.post("/user/register", async (req, res)=>{
    //console.log(req.body);
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.render("user_registered.ejs", {newUser});
    } catch(err){
        res.status(500).send(err);
    }
})

app.get("/admin/advisor/", (req, res)=>{
    res.render("user_registered.ejs");
})

app.post("/admin/advisor/", async (req, res)=>{
    try{
        
    } catch {

    }
})

app.listen(3000, ()=>{
    console.log("App listening to Port 3000");
})