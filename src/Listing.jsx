import axios from "axios";
import React, { useEffect, useState } from "react";

function Listing({fetchData, fetchFun}) {
  const [data, setData] = useState([]);


  // async function fetchTodoList() {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/todoList`);
  //     setData(res.data);
  //     console.log(res.data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  
  // useEffect(() => {
   
  //   fetchTodoList();

  // }, []);

  function handleDelete(index) {
    axios
      .delete(`http://localhost:3000/todoList/${index}`)
      .then((res) => {
        // setData(data => data.filter((item) => item.index !== index));
        console.log(res);
        fetchFun();
      })
      
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });

  }

  const handleCheckboxChange = (id, isChecked) => {
    const updatedItem = {
      ...fetchData.find((item) => item.id === id),
      isChecked: !isChecked,
    };

    console.log(updatedItem);

    axios
      .put(`http://localhost:3000/todoList/${id}`, updatedItem)
      .then((res) => {
        // console.log(res);
        // Update the local state after successful update on the server
        setData((prevData) =>
          prevData.map((item) => (item.id === id ? updatedItem : item))
        );
        fetchFun();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="todoList">
        {fetchData.map((data, index) => (
          <div key={index}>
            <h1
              style={
                data.isChecked
                  ? {
                      color: "red",
                      "text-decoration": "line-through",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              {data.title}
            </h1>

            <div className="button">
              <input
                type="checkbox"
                checked={data.isChecked}
                onChange={(e) => handleCheckboxChange(data.id, data.isChecked)}
              />

              <button onClick={() => handleDelete(data.id)} className="delete">
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
