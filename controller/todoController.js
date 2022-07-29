const Todo= require('../model/todoModel.js');

const getTodos = async(req, res) => {
const todos = await Todo.find()
res.json(todos)
}

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })
  todo.save()
  res.json(todo)
}

const deleteTodo = async(req, res) => {
  const deleteTodo = await Todo.findByIdAndDelete(req.params.id, req.body.title)
  res.json(deleteTodo)
}

const toggleTodo = async(req, res) => {
  const todo = await Todo.findById(req.params.id) 
  todo.completed= !todo.completed
  todo.save()
  res.json(todo)
}

const editTodo = async(req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body) 
  todo.save()
  res.json(todo)
}

exports.getTodos = getTodos
exports.createTodo = createTodo
exports.deleteTodo = deleteTodo
exports.toggleTodo = toggleTodo
exports.editTodo = editTodo