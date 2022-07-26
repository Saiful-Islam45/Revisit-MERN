const express= require('express');
const router=express.Router();

const {getTodos, createTodo, deleteTodo, toggleTodo, editTodo}= require('../controller/todoController');

router.get('/todos', getTodos)
router.post("/todo/new", createTodo)
router.delete("/todo/delete/:id", deleteTodo)
router.get("/todo/toggleStatus/:id", toggleTodo)
router.post("/todo/edit/:id", editTodo)

module.exports= router