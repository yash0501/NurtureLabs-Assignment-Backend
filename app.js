const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(3000, ()=>{
    console.log("App listening to Port 3000");
})