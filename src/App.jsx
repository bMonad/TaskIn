import { useEffect, useState } from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import './App.css'

const App = () => {

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleDelete = (taskId) => {
    const newtasks = tasks.filter(task => task.id !== taskId);
    setTasks(newtasks);
  }

  return (
    <div className="app">
      <Header setTask={setTasks} />
      <Main tasks={tasks} handleDelete={handleDelete} />
    </div>
  )
}

export default App;