import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const listNumber = props.number + 1;
  const task = props.task;
  const trashIcon = <FontAwesomeIcon icon = {faTrash} />
  const editIcon = <FontAwesomeIcon icon = {faEdit} />
  console.log(props.id);

  return (
    <ul>
      <li>  {listNumber} | {task} 
      <button onClick = {props.deleteEvent}>{trashIcon}</button>
      <button>{editIcon}</button>
      </li>
    </ul>
    );
};

export default Overview;