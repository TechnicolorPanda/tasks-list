import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { 
    task,
    number,
  } = props;

  console.log(task);

  const trashIcon = <FontAwesomeIcon icon = {faTrash} />
  const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <ul>
      <li>
        {' '}
        {number + 1}
        {' '}
        |
        {' '}
        {task}
        <button onClick={props.deleteEvent}>{trashIcon}</button>
        <button>{editIcon}</button>
      </li>
    </ul>
  );
}

export default Overview;