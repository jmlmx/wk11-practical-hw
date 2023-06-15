const Todo = require("../models/todo")

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(400).json({message: error.message})
    } 
}

exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.json({todo})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getATodo = async (req, res) => {
    try {
        const todo = await Todo.findOne({_id: req.params.id})
        res.json(todo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const todo = await Todo.findOne({ _id: req.params.id })
        updates.forEach((update) => (todo[update] = req.body[update]))
        await todo.save()
        res.json(todo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        await req.todo.deleteOne()
        res.json({message: "Todo Item Deleted"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}