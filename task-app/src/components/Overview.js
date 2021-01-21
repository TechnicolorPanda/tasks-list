import React, { Component } from 'react';
import uniqid from 'uniqid';

const Overview = (props) => {
  const { taskArray } = props;

  return (
    <ul>
        {taskArray.map((task) => {
            return <li key={uniqid()}>{task}</li>;
        })}
    </ul>
  );
};

export default Overview;