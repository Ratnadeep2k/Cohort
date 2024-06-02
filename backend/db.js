
const mongoose = require('mongoose')

/*
    title = string 
    description = string
    Completed = boolean
*/
// .env
mongoose.connect("mongodb+srv://baruah:arU7UaM7HFnKU69w@cluster0.0mb66ja.mongodb.net/todos")
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}