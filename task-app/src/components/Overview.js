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
        {taskArray.map((task, i) => {
            let listNumber = i + 1;
            return <li key={uniqid()}>{listNumber}  {task}  {trashIcon}  {editIcon}</li>;
        })}
    </ul>
  );
};

export default Overview;