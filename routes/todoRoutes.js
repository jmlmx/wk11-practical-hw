const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.getAllTodos)// Get all todo items
router.post('/', todoController.createTodo)// Create a new todo item
router.get('/:id', todoController.getATodo)//Get a specific todo item
router.put('/:id', todoController.updateTodo)//Update a specific todo item
router.delete('/:id', todoController.deleteTodo)//Delete a specific todo item

module.exports = router