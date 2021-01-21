import React from 'react';
// import uniqid from 'uniqid';

const Overview = (props) => {
  const { taskArray } = props;

  return (
    <ul>
        {taskArray.map((task, i) => {
            let keyValue = i + 1;
            console.log(i);
            return <li key = {keyValue}> {keyValue } {task}</li>
            // return <li key={uniqid()}>{task}</li>;
        })}
    </ul>
  );
};

export default Overview;