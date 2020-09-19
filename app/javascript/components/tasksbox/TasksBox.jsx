import React from 'react';
import NewTaskForm from './NewTaskForm';
import Tasks from './Tasks';

const TasksBox = () => (
  <div className="col-5">
    <NewTaskForm />
    <Tasks />
  </div>
);

export default TasksBox;
