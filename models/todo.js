const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    complete: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now}
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo