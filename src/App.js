import React, { Component } from 'react';
import './App.css';
import './components/TaskApp'
import TaskApp from './components/TaskApp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TaskApp />

      </div>
    );
  }
}

export default App;
