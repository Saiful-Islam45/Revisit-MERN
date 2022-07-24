const Todo= require('../model/todoModel.js');

const getTodos = async(req, res) => {
const todos = await Todo.find()
res.json(todos)
}
exports.getTodos = getTodos