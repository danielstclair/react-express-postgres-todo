import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos, getTodo, createTodo, editTodo, deleteTodo } from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.deleteTodo({ id: 2 });
  }
  componentDidUpdate() {
    const { didEdit, didCreate, didDelete } = this.props.todos;
    if (didCreate || didEdit || didDelete) {
      return this.props.getTodos();
    }
  }
  render() {
    return (
      <section>
        <TodoApp />
        <footer className="info">
          <p>Double click to edit a todo</p>
          <p>Written by Daniel St. Clair</p>
          <p>For fun.</p>
        </footer>
      </section>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTodos, getTodo, createTodo, editTodo, deleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
