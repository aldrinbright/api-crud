import axios from "axios";
import React, { useState } from "react";

function TodoInput({fetchFun}) {
  let [input, setInput] = useState({
    title: "",
    id: "",
    isChecked: false,
  });

  async function handleSubmit(e) {


  
    e.preventDefault();


    try {
      const res =  await axios.post("http://localhost:3000/todoList", input)
  
      fetchFun();
  
     
       
        setInput({
          title: "",
          id: Math.random().toString(36).substr(2, 9),
          isChecked: false,
        });
    } catch (error) {
      console.log(error);
    }


   
  
    
  }

  return (
    <div className="todoInput">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the Task"
          value={input.title}
          onChange={(e) =>
            setInput({
              ...input,
              title: e.target.value,
              id: Math.random().toString(36).substr(2, 9),
              isChecked: false,
            })
          }
        />

        <button type="submit" className="todoSubmit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
