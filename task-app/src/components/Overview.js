import React from 'react';
import './Overview.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { taskArray } = props;
  const trashIcon = <FontAwesomeIcon icon = {faTrash} />
  const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <ul>
        {taskArray.map((task, idKey, i) => {
            let listNumber = i + 1;
            <task
              idKey = {task.idKey}
              task = {task.name} />
            return <li key={uniqid}>
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