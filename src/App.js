import React, {useState} from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";

import "./scss/App.scss";

function App() {
  var localStoragetodos =  JSON.parse(localStorage.getItem("Todos"))? JSON.parse(localStorage.getItem("Todos")) : [];
  const [tasks,setTask] =useState(localStoragetodos);
// general setting tasks
// on localstorage and in state
const setData= (items)=>{
  localStorage.setItem("Todos", JSON.stringify(items));
  setTask(items);
}
// ID GENERATOR
var makeid = () =>{
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
   // AddButton
   const addTask= (item)=>{
    console.log(item);
    item.id = makeid();
    var newTasks = [...tasks, item];
    setData(newTasks);

  };
  // complete/incomplete a task
  const completeTask = (id)=>{
    var updatedTasks =[...tasks] ;
    var changedTask =updatedTasks.filter(item =>{
      return item.id == id
    })[0];
    changedTask.isComplete = !changedTask.isComplete;
    setData(updatedTasks);
  };

  // Delete item
  const deleteTask = (id) => {
    var oldtasks =[...tasks] ;
    var updatedTasks =oldtasks.filter(item =>{
      return item.id != id
    });
    setData(updatedTasks);
  }
const completedTasks = ()=>{
  let counter = 0;
  tasks.map(item =>{
    if(item.isComplete)counter ++;
  });
    return counter;
};
const numberCompletedTask = completedTasks();
  var todoList = tasks.length ? tasks.map((item) => {
    return (
      <Todo
      todo={item}
      key={item.id}
      completeTask={completeTask}
      deleteTask={deleteTask}
      />
    );
  }) : <h2 className="heading-secondary">There is no Todos yet</h2>;

var counterItem = tasks.length ?  <Counter completed={numberCompletedTask} all={tasks.length}/> : "";
 
  return (
    <div className="App">
      <h1 className="heading-primary">To Do List</h1>
      <div className="container">{todoList}</div>
      <div className="footer">
      {counterItem}
      <AddTodo  addTask={addTask}></AddTodo>
      </div>
    </div>
  );
}

export default App;
