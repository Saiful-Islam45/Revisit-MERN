const express= require('express');
const router=express.Router();

const {getTodos, createTodo}= require('../controller/todoController');

router.get('/todos', getTodos)
router.post("/todo/new", createTodo)
module.exports= router