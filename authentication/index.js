 const express = require('express')
 const app = express();
 const port = 3000;
 var jwt = require('jsonwebtoken')
const jwtpassword = "1234";
 app.use(express.json());
  
 const ALL_USER = [
    {
        username:"test123@gmail.com",
        password :"1234",
        name :"Ratnadeep"
    },
    {
        username:"test@gmail.com",
        password :"123",
        name:"test"
    },
    {
        username:"test1@gmail.com",
        password :"12345",
        name :"check"
    }
 ]

 function user(username,password){
    let userExist= false;
    for(let i=0;i< ALL_USER.length;i++){
        
        if(ALL_USER[i].username == username && ALL_USER[i].password == password){
               userExist = true;
        }
    }
    return userExist ;
 }

 app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!user(username,password)){
        return res.status(403).json({
            message:"Invalid username or password"
        });
    }
    var token =jwt.sign({username : username},jwtpassword);
    return res.status(200).json({
        message:"User logged in successfully",
        token:token
    })
 })
  

 app.get('/users',function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtpassword);
        const username = decoded.username;
        res.json({
            users:ALL_USER.filter(function(value){
                if(value.username == username){
                    return false;
                } else {
                    return true;
                }
            })
        })

    }
    catch(err){
        console.log(err);
        return res.status(403).json({
            message:"Invalid token"
            
        })

    }
 })
 app.listen(port)