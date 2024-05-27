const express = require('express');
const zod =require('zod');
const app = express();
const port = 3000;
const schema = zod.array(zod.number());

{/*
    email : string =>email
    password : atleast 8 char
    country :"IN" ,"US"
*/}

// const schema2 = zod.object({
//     email:zod.string(),
//     password :zod.string(),
//     country :zod.literal("IN").or(zod.literal("US")),
// })
app.use(express.json());

app.post('/health-checkup',function(req,res){
    const kidneys = req.body.kidneys;
    const response =schema.safeParse(kidneys);
    res.send({
        response
    })
    
});


//global catches
// app.use(function(err,req,res,next){

//     res.json({
//         msg:"Sorry Something is up with our server"
//     })
// })
app.listen(port);