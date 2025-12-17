import TaskColumn from "../components/TaskColumn";
import Todo from '../assets/direct-hit.png';
import Progress from '../assets/glowing-star.png';
import Done from '../assets/check-mark-button.png';

const Main = ({ tasks, handleDelete }) => {

  return (
    <main className="app_main">
      <TaskColumn icon={Todo} name='Todo' tasks={tasks} status='todo' handleDelete={handleDelete} />
      <TaskColumn icon={Progress} name='In Progress' tasks={tasks} status='progress' handleDelete={handleDelete} />
      <TaskColumn icon={Done} name='Done' tasks={tasks} status='done' handleDelete={handleDelete} />
    </main>
  )
}

export default Main;