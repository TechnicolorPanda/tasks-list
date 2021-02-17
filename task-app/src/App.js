import React, { useState } from 'react';
import Overview from "./components/Overview";
import './App.css';
import uniqid from 'uniqid';

const App = () => {

  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();  
    setTask(event.target.value);
    setSubmit(false);
  };

  const onSubmitTask = (event) => {
    event.preventDefault();
    // setTask(event.target.value);
    setTaskArray(taskArray => taskArray.concat(task));
    setTask('');
    setSubmit(true);
  };

  //TODO: correct index number to delete right item

  const deleteTask = (index) => {
    console.log(index);
    // setTaskArray(taskArray => Object.assign([], taskArray));
    // taskArray.splice(index, 1);
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
              deleteEvent={deleteTask.bind(this)}
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
