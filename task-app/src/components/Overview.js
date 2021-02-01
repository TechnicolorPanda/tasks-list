import React from 'react';
import './Overview.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { taskArray } = props;
  // const [taskArray, setTasks] = React.useState(taskArray);
  const trashIcon = <FontAwesomeIcon icon = {faTrash} />
  const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <ul>
        {taskArray.map((task, i) => {
            let listNumber = i + 1;
            let id = uniqid();
            <task
              id = {task.id}
              task = {task.name} />
            return <li key={id}>
                {listNumber} {task}  
              <span> </span>
              <button onClick={props.deleteEvent}>
                {trashIcon}
              </button>  
              <span> </span>
                {editIcon}
              </li>;
        })}
    </ul>
    );
};

export default Overview;