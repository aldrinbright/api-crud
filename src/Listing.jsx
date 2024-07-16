import axios from "axios";
import React, { useEffect, useState } from "react";

function Listing({ fetchData, fetchFun }) {
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

  async function handleDelete(index) {
    try {
      const res = await axios.delete(`http://localhost:3000/todoList/${index}`);

      fetchFun();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckboxChange = async (id, isChecked) => {
    try {
      const updatedItem = {
        ...fetchData.find((item) => item.id === id),
        isChecked: !isChecked,
      };

      // console.log(updatedItem);

      const res = await axios.put(
        `http://localhost:3000/todoList/${id}`,
        updatedItem
      );

      setData((prevData) =>
        prevData.map((item) => (item.id === id ? updatedItem : item))
      );
      fetchFun();
    } catch (error) {
      console.error(error);
    }
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
