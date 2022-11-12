const express=require("express");
var bodyparser=require("body-parser");
var urlencoded  = require("body-parser");
const app=express();




app.use(bodyparser.urlencoded({ extended: true}));
// app.use(bodyparser.json);
app.get("/",function (req,res) {
    
    res.sendFile(__dirname +"/index.html");

});



app.post("/",function (req,res) {
 var num1=Number(req.body.num1);
 var num2=Number(req.body.num2);
 
 var result=Number(num1+num2);
    // console.log(body)

    console.log(result);
    res.send("your result is "+result);

});

app.listen(3000, function () {
    
console.log("it's working");

});