import Header from "./pages/Header";
import Main from "./pages/Main";
import './App.css'
import { useState } from "react";

const App = () => {

  const [task, setTask] = useState([]);

  console.log("tasks: ", task);

  return (
    <div className="app">
      <Header setTask={setTask} />
      <Main tasks={task} />
    </div>
  )
}

export default App;