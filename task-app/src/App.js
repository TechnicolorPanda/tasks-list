import React, { Component } from "react";
import Overview from "./components/Overview";
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      idKey: uniqid(),
      taskArray: [],
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
        {idKey: uniqid()},
        {task: this.state.task},
      ]
    });

    this.setState({
      taskArray: this.state.taskArray.concat(this.state.taskArray),
      task: '',
      idKey: uniqid(),
    });
    console.log(this.state);
  };

  render() {
    const { task, taskArray } = this.state;

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
        <Overview taskArray={taskArray} />
      </div>
    );
  }
}

export default App;
