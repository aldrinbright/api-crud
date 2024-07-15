import axios from "axios";

import { useEffect, useState } from "react";
import Listing from "./Listing";
import Title from "./Title";
import TodoInput from "./TodoInput";

function App() {
  return (
    <>



      <Title />
      <TodoInput/>

      <Listing />
    </>
  );
}

export default App;
