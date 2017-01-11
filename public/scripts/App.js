import React, { Component } from 'react';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <section>
        <TodoApp />
        <footer>Footer will go here</footer>
      </section>
    );
  }
}

export default App;
