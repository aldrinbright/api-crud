import axios from "axios";
import React, { useEffect, useState } from "react";

function Listing() {
  const [data, setData] = useState([]);

  // const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todoList")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  function handleDelete(index) {
    axios
      .delete(`http://localhost:3000/todoList/${index}`)
      .then((res) => {
        // setData(data => data.filter((item) => item.index !== index));
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleCheckboxChange = (index) => {
    axios
      .put(`http://localhost:3000/todoList/${index}`)

      .then((res) => {
        console.log(res);
      });
  };

  

  return (
    <div>
      <div className="todoList">
        {data.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>

            <div className="button">
              <input
                type="checkbox"
                checked={data.isChecked}
                onChange={() => handleCheckboxChange(data.id)}
              />

              <button onClick={() => handleDelete(data.id)} className="delete">
                X{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
