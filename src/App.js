import { useEffect, useState } from "react";
import Listing from "./Listing";
import Title from "./Title";
import TodoInput from "./TodoInput";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  async function fetchTodoList() {
    try {
      const res = await axios.get(`http://localhost:3000/todoList`);
      setData(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <Title />
      <TodoInput fetchData={data} fetchFun={fetchTodoList} />

      <Listing fetchData={data} fetchFun={fetchTodoList} />
    </>
  );
}

export default App;
