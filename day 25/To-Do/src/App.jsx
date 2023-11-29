import React, { useState } from 'react'
import './app.css'

function App() {

  const [todo,setTodo] = useState([]);
  const nameData = document.getElementById('todo-name').value;
  const descriptionData = document.getElementById('todo-description').value;
  const statusData = document.getElementById('statusType').value;
  
// card
  function card (id) {
    
    return (
      <div key = {id} className='card'>
      <div>
        <label>Name : {name}</label>
        <label>Description : {description}</label>
        
        <select name="status" id='statusType'>
  <option value="Not Completed">Not Completed</option>
  <option value="Completed">Completed</option>
        </select>
       
       <button onClick={editData(id)}>Edit</button>
       <button onClick={deleteData(id)}>Delete</button>

      </div>
      </div>
    )
  }

  // add function
  function addTodo() {

    console.log('add todo');

    const data = {
      id : Date.now,
      name : nameData,
      description : descriptionData,
      status : 'Not Completed'
    }

setTodo(...todo,data);

data.name = '';
data.description = '';

alert('todo added sucessfully');

  }

  // edit function
  function editData(id){
if(todo.id === id){

  const data = {
    id : Date.now,
    name : nameData,
    description : descriptionData,
    status : statusData
  }

  setTodo(...todo,data);

  data.name = '';
data.description = '';
data.status = '';

  alert('data updated sucessfully');
}
  }

  // delete function
  function deleteData(id){

    if (todo.length >0) {
      setTodo.filter((todo) => todo.id === id);
    }
    
  }

  // dropdown function  
  function setFilteredByStatus(data){
    if(data === 'Completed'){
      todo.filter((todo) => todo.status == 'Completed');
    }else if(data === 'Not Completed'){
      todo.filter((todo) => todo.status == 'Not Completed');
    }else{
      todo;
    }
  }

  return (
    // whole screen part 
    <div className='container'>
      <h1>My To-Do</h1>
      <input placeholder='todoName' id='todo-name'></input>
      <input placeholder='todoDescription' id='todo-description'></input>
      <button onClick={addTodo}>Add Todo</button>
      
      <div className='list-container'>
        <h3>My todos</h3>
        <label>Status Filter:</label>
        <select name="status" onChange={(e) => setFilteredByStatus(e.target.value)}>
        <option value="All">All</option>
  <option value="Completed">Completed</option>
  <option value="Not Completed">Not Completed</option>
        </select>
<div className='row row-cols-3'>
{
  todo && todo.map((todo) => {
    <card id = {todo.id}/>
  })
}
</div>
      </div>
    </div>
  )
}

export default App