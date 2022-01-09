const express=require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true})); 

// app.get("/",(req,res)=>{
//   res.send("ready");
// });
// app.get("/home",(req,res)=>{
//     res.send(" home ready");
//   });
app.post("/email",(req,res)=>{
  var data1=req.body.email;
  console.log("email send successfully");
  res.send("email successfully send to"+"&nbsp"+"<b>"+data1+"</b>");
})

  app.listen(3000,()=>{
    console.log("server ready at 3000");
});