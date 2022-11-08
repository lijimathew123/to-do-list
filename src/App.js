import React from 'react';
import './Style.css'
import {useState} from 'react'
function App() {
  const time = new Date().toLocaleTimeString();
  var d = new Date();
  const days = ["sunday","monday","tuesday","wednesday","thursday","fridat","saturday"];
  const [toDos,setTodos] =useState([])
  const[toDo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {days[d.getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        
      { toDos.map((obj)=>{

        
      return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            } }value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i  id={obj.id}  className="fas fa-times" onClick={(e)=>{
            let index=toDos.findIndex(obj=>{
              return obj.id==e.target.id
            })
            if(index !== -1){
              toDos.splice(index,1);
              setTodos([...toDos]);
            }
            }}></i>
          </div>
        </div>)
      }) }
      
       <h1>Completed task</h1>
      {toDos.map((obj)=>{
        if(obj.status){
          return(
          <div>
          <h1>{obj.text}</h1>
          <h3>{d.toDateString()} {time} </h3>
          </div>)

        }
        return null
      })

      }
      <h2>---------------------------------------</h2>
      <h1>UnCompleted task</h1>
      {toDos.map((obj)=>{
        if(!obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
      })

      }
      </div>
    </div>
  );
}

export default App