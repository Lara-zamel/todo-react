import React, { useState } from "react";
import Checkbox from "./Checkbox";

import "../scss/todo.scss";

export default function Todo({ todo, completeTask,deleteTask }) {
  const [checked, setChecked] = useState(todo.isComplete);
  const [expandToggle, setToggled] = useState(false);

  // action on checking checkbox
  const onChecked = (val) => {
    setChecked(val);
    completeTask(todo.id);
  };
  return (
    <div className={`todo ${todo.color}`}>
     <div className="delete" onClick={()=>{deleteTask(todo.id)}}>
      <span >X</span>
      </div>
      <div className="checkbox-placeholder">
        <Checkbox checked={checked} onChange={(val) => onChecked(val)} />
        <p
          className={`label ${checked ? "checked" : ""}`}
          onClick={() => setToggled(!expandToggle)}
        >
          {todo.title}
        </p>
      </div>
      <div className={`extendable-part ${expandToggle ? "" : "hidden"}`}>
        <p className="content">{todo.description}</p>
      </div>
    </div>
  );
}
