import React, { useState } from 'react';
import Overview from "./components/Overview";
import './App.css';
import uniqid from 'uniqid';

const App = () => {

  // declares states

  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState('');
  const [submit, setSubmit] = useState(false);

  // handles input change upon input

  const handleChange = (event) => {
    event.preventDefault();  
    setTask(event.target.value);
    setSubmit(false);
  };

  // creates array to pass to Overview component

  const onSubmitTask = (event) => {
    event.preventDefault();
    setTask(event.target.value);
    setTaskArray(taskArray => taskArray.concat(task));
    setTask('');
    setSubmit(true);
  };

  // deletes task up selection

  const deleteTask = (index) => {
    setTaskArray(taskArray => taskArray.filter((taskArray, i) => i !== index));
  }

  // TODO: display task to be edited in form box

  const onEditTask = (index) => {
    let selectedTask = taskArray.filter((taskArray, i) => i === index);
    setTask(selectedTask);

    //removes original instance of task item to be edited
    setTaskArray(taskArray => taskArray.filter((taskArray, i) => i !== index));
  }

  return (
    <div>
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

      {submit 
        ? taskArray.map((task, index) => {
          return(<Overview key = {uniqid()}
            deleteEvent = {deleteTask.bind(task, index)}
            editEvent = {onEditTask.bind(task, index)}
            task = {task} 
            number = {index}
          />
        )})
        : null
      }
    </div>
  );
}

export default App;
