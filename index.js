const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("server started");
    console.log("listining on port 8008");

});

const path =require("path");

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));


app.use(express.static("public"));



app.get("/",(req,res)=>{

    res.render("index.ejs");
})
app.get("/hello",(req,res)=>{

   res.send("hii")
})