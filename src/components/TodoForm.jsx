import React from 'react'
import { useState } from 'react'
import {account} from "../appwrite/appwriteConfig.ts"
import {databases} from "../appwrite/appwriteConfig"
import  "../assets/css/TodoForm/todoForm.css";
import {v4 as uuvidV4} from 'uuid';
import { Permission ,Role } from 'appwrite';
const TodoForm = () => {

  const [todo, setTodo] = useState({
    "author": account.name,
    "todo":''
  })
  const handleSubmit = (e) =>{

    e.preventDefault();  
    const promise  = databases.createDocument("64187e3b0c4e988035e2", "64187e5258a86452f64d" , uuvidV4() , todo.todo , [
      Permission.read(Role.any()),
      Permission.update(Role.any()),
    ] )
    promise.then(
      function (response) {
        console.log(response);  
      },function (error) {
        console.log(error);
      }
    )
  }


  return (
    <>  
      <div>TodoForm</div>

      <form>
        <input type="text" id="add_todo" placeholder='moshi moshi ' name='add_todo'
          onChange={(e) =>{

            setTodo({...todo ,[e.target.todo]: e.target.value})
            console.log(todo);
          }}
        />
        <button for="add_todo" class="add_todo_btn" onClick={handleSubmit}>add</button>  


      </form>
      <div>
      </div>
      
    </>
   
  )
}

export default TodoForm