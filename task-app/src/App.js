
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super()

    this.state = {
      task: '',
      taskArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: '',
    });
  }

  render() {

    const { task, taskArray } = this.state;

    return (
      <div>
        <form onSubmit = {this.onSubmitTask}>
          <label htmlFor = 'taskInput'>Enter task</label>
          <input 
            onChange = {this.handleChange}
            value = {task}
            type = 'text' 
            id = 'taskInput' />
          <button type = 'submit'>
            Submit
          </button>
        </form>
        <Overview taskArray = {taskArray} />
      </div>
    );
  }
}

export default App;
