import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, deletesItem}) {

  const tasksDisplayed = tasks.map(task => <Task key={task.text} deletesItem={deletesItem} taskItem={task}/>)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksDisplayed}
    </div>
  );
}

export default TaskList;
