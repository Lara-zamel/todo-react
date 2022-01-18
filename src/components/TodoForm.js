import React, {useState} from "react";

import "../scss/todoForm.scss";
function TodoForm({addTask ,setToggle}) {
    
    // const [id,setId] = useState(0);
   const [title,setTitle]=useState("");
   const [description,setDescription]=useState("");
   const [color,setColor]=useState("");
   const [isComplete,setIsCompleted]=useState(false);
const onSubmit=(e)=>{
    e.preventDefault();
    if(!title){
        alert("please Add title");
        return;
    }
    setToggle();
    addTask({title,description,color,isComplete});
};
  return <div className="adding-form">
      <div className="form-container">
      <form   className="todo-form" onSubmit={onSubmit}>
          <div className="form-group">
              <label htmlFor="title" className="label">Title</label>
              <input type="text" placeholder="ex: Buy Milk" className="form-input title" onChange={(e)=> {setTitle(e.target.value)}} />
          </div>
          <div className="form-group color">
              <div className={`circle red ${color=="red" ? "selected" : ""}`} onClick={()=>{ setColor("red")}} ></div>
              <div className={`circle blue ${color=="blue" ? "selected" : ""}`} onClick={()=>{setColor("blue")}}  ></div>
              <div className={`circle yellow ${color=="yellow" ? "selected" : ""}`} onClick={()=>{setColor("yellow")}} ></div>

          </div>
          <div className="form-group">
              <label htmlFor="description" className="label">Description</label>
              <textarea cols="7" rows="3" type="text" placeholder="Add long description here" className="form-input description" onChange={(e)=> {setDescription(e.target.value)}}/>
          </div>
          <div className="form-group button">
              <input type="submit" className="primary-button" value="Save Task"/>
          </div>
      </form>
      </div>
  </div>;
}

export default TodoForm;
