import React, {useState} from "react";
import TodoForm from "./TodoForm";
function AddTodo({addTask}) {
const [toggle,toggleChange]=useState(false);
var form = toggle ? <TodoForm addTask={addTask} setToggle={toggleChange}></TodoForm> : "";
  return (
    <div className="add-todo">
      <span onClick={()=>toggleChange(!toggle)}>+</span>
      <div className="form-space">{form}</div>
    </div>
    
  );
}
export default AddTodo;
