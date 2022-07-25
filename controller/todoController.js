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
exports.getTodos = getTodos
exports.createTodo = createTodo