
const express = require("express")
const app = express()

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://baruah:arU7UaM7HFnKU69w@cluster0.0mb66ja.mongodb.net/userappnew")
const User = mongoose.model('Users',{name:String ,email:String,password: String});



//CRUD OPERATION


app.post('/signup',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
 
    const existUser = await User.findOne({email:username})

    if(existUser){
        return res.status(403).json({
            message:"User already exists"
        })
    }
    

    const user = new User({
        name:name,
        email:username, 
        password:password,
    }) ;
    user.save();
    res.json({
        message:"User created successfully"
    })
})

app.listen(3000)
