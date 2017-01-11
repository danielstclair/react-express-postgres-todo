var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/', (req, res) => {
  res.render('index');
})

// get all
router.get('/api/todos', db.getAllTodos);
// get one
router.get('/api/todos/:id', db.getSingleTodo);
// create a new puppy
router.post('/api/todos', db.createTodo);
// edit puppy
router.put('/api/todos/:id', db.updateTodo);
// remove puppy
router.delete('/api/todos/:id', db.removeTodo);

module.exports = router;
