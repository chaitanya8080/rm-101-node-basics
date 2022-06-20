// install and import express
const express = require("express");
const bodyParser = require("body-parser")
const users = require("./assets/user.json")
// const express = () => {};
let app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// Code here


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/assets/users.html");
})

app.get("/users",(req,res)=>{
    res.send({users});
})

// app.get("/users/:id", (req,res)=>{
//      const user =  users.findById(req.params.id).lean().exec();
//     res.json({data:user});
// })

app.post("/users",(req,res)=>{
    const user = {
        id: users.length+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address,
        age: req.body.age
    }

    users.push(user);

    res.json(user);
})



app.listen(8000,()=>{

  try {
    console.log("connected to 8000")
  } catch (error) {
     console.log(error);
  }
})



// Note: Do not remove this export statement
module.exports = app;
