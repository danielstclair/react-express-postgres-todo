import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    console.log(this.props.todos)
    return (
      <section>
        <TodoApp />
        <footer>Footer will go here</footer>
      </section>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTodos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
