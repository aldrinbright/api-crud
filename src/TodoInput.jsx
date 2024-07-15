import axios from "axios";
import React, { useState } from "react";

function TodoInput() {


   let [input, setInput] = useState({
    title: '',
    id: '',

   });

    function handleSubmit (e){

        e.preventDefault();
        axios.post('http://localhost:3000/todoList', input)
        .then(res => {
            console.log(res)
        })
       
        

    }


  return (
    <div className="todoInput">

    <form action="" onSubmit={handleSubmit}>


 

      <input type="text" 
      placeholder="Enter your Task"
      onChange={(e) => setInput({...input,title : e.target.value, id: Math.random().toString(36).substr(2, 9)})}
      />

      <button type="submit" className="todoSubmit">
        Add Task
      </button>
      </form>
    </div>
  );
}

export default TodoInput;
