import React from "react";

function Task({taskItem, deletesItem,}) {
  return (
    <div className="task">
      <div className="label">{taskItem.category}</div>
      <div className="text">{taskItem.text}</div>
      <button className="delete" onClick={()=> deletesItem(taskItem.text)}
        >X</button>
    </div>
  );
}

export default Task;
