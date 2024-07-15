import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Listing() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3000/todoList")
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, [data]);
    
      return (
        <div>
          <div className="todoList">
            {data.map((data, index) => (
              <div key={index}>
    
                <h1>{data.title}</h1>
                <input type="checkbox" />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Listing