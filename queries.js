const promise = require('bluebird');

const options = {
  //initialization options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/todo_list';
const db = pgp(connectionString);

// Add query functions

function getAllTodos(req, res, next) {
  db.any('select * from todos')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL todos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleTodo(req, res, next) {
  var todoID = parseInt(req.params.id);
  // console.log(todoID);
  db.one('select * from todos where id=$1', [todoID])
    .then(function (data) {
      console.log(data);
      res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Retrieved ONE todo'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createTodo(req, res, next) {
  const completed = (req.body.completed === 'true');
  const { task } = req.body;
  db.none('insert into todos(task, completed)' + ' values(${task}, ${completed})', { task, completed })
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one todo'
        });
    })
    .catch((err) => {
      return next(err);
    });
}

function updateTodo(req, res, next) {
  const completed = (req.body.completed === 'true');
  console.log(typeof completed, completed);
  const { task } = req.body;
  db.none('update todos set task=$1, completed=$2 where id=$3', [ task, completed, req.params.id ])
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated todo'
        });
    })
    .catch(err => {
      return next(err);
    });
}

function removeTodo(req, res, next) {
  const todoID = parseInt(req.params.id);
  db.result('delete from todos where id = $1', todoID)
    .then(result => {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} todo`
        });
    })
    .catch(err => {
      return next(err);
    });
}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  removeTodo
};
