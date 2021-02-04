import React, { Component } from 'react';
import Overview from "./components/Overview";
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskArray: [],
      task: '',
      submit: false,
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      task: event.target.value,
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();

    this.setState({
      taskArray: [
        {task: this.state.task},
      ]
    });

    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: '',
      submit: true,
    });
    console.log(this.state.taskArray);
  };

  //TODO: correct index number to delete right item

  deleteTask = (index) => {
    console.log(index);
    const taskArray = Object.assign([], this.state.taskArray);
    taskArray.splice(index, 1);
    this.setState({taskArray: taskArray});
  }

  render() {
    const { task, taskArray, submit } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>

      { submit 
        ? taskArray.map((task, index) => {
        return(<div key = {uniqid()}><Overview 
          deleteEvent={this.deleteTask.bind(this)}
          task = {task} 
          number = {index}
          id = {uniqid()}
        /></div>)
        })
        : null
      }
          </div>
    );
  };
}

export default App;
