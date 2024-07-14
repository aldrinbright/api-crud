import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todoList")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div>
      <div className="list">
        {data.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
