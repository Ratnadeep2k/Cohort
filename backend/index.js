
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const cors = require("cors")
const { todo } = require('./db');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You Have entered wrong input"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })

})
app.get('/todos',async function(req,res){
    //Fetch all from monodb
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put('/completed',async function(req,res){
        const updatepayload  = req.body;
        const parsedPayload = updatepayload.safeParse(updateTodo)
        if(!parsedPayload.success){
            res.status(411).json({
                msg:"You Have entered wrong input"
            })
            return;
        }
        //update the value in mongodb
        await todo.update({

            _id : req.body.id
        },
        {
            completed:true
        }
    
    )
    res.json({
        msg:"Todo is marked as completed"
    })
})
app.listen(port);
console.log(`Server is running in the port ${port}`);