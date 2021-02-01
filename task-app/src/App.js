import React, { Component } from 'react';
import Overview from './components/Overview';
import './App.css';

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

  deleteUser = (index) => {
    const taskArray = Object.assign([], this.state.taskArray);
    taskArray.splice(index, 1);
    this.setState({taskArray:taskArray});
}

  render() {

    const { task, taskArray } = this.state;

    return (
      <div>
          <h1>Task Manager</h1>
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
        <Overview 
          deleteEvent={this.deleteUser.bind(this)}
          taskArray = {taskArray} />
       </div>
    );
  }
}

export default App;
