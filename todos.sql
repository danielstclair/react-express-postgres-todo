DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;

\c todo_list;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY,
  task VARCHAR,
  completed BOOLEAN
);

INSERT INTO todos (task, completed)
  VALUES ('try it out', false);
