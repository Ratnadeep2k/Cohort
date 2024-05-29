const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://baruah:arU7UaM7HFnKU69w@cluster0.0mb66ja.mongodb.net/userappnew")
try{
const User = mongoose.model('Users',{name:String ,email:String,password: String});
const user = new User({
    name:"Ratnadeep",
    email:"test@gmail.com",
    password:"123456",
}) ;
user.save();
}
catch(err){
    console.log(err);
}
