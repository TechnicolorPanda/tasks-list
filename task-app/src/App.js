import React, { useState } from 'react';
import Overview from "./components/Overview";
import './App.css';
import uniqid from 'uniqid';

const App = () => {

  // declares states

  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState('');

  // handles input change upon input

  const handleChange = (event) => {
    event.preventDefault();  
    setTask(event.target.value);
  };

  // creates array of task items to pass to Overview component

  const onSubmitTask = (event) => {
    event.preventDefault();
    setTask(event.target.value);
    setTaskArray(taskArray => taskArray.concat(task));
    setTask('');
  };

  // deletes task up selection

  const deleteTask = (index) => {
    setTaskArray(taskArray => taskArray.filter((taskArray, i) => i !== index));
  }

  // edits target task upon selection

  const onEditTask = (index) => {
    let selectedTask = taskArray.filter((taskArray, i) => i === index);
    setTask(selectedTask);

    //removes original instance of task item to be edited to prevent duplicate
    setTaskArray(taskArray => taskArray.filter((taskArray, i) => i !== index));
  }

  return (
    <div>

      {/* creates form to enter in new task */}

      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={handleChange}
          value={task}
          type="text"
          id="taskInput"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* passes each array item to Overview component for rendering */}

      {taskArray.map((task, index) => {
          return(<Overview key = {uniqid()}
            deleteEvent = {deleteTask.bind(task, index)}
            editEvent = {onEditTask.bind(task, index)}
            task = {task} 
            number = {index}
          />
        )
      })}
    </div>
  );
}

export default App;
