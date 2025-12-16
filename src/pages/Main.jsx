import TaskColumn from "../components/TaskColumn";
import Todo from '../assets/direct-hit.png';
import Progress from '../assets/glowing-star.png';
import Done from '../assets/check-mark-button.png';

const Main = ({ tasks }) => {
  return (
    <main className="app_main">
      <TaskColumn icon={Todo} name='Todo' tasks={tasks} status='todo' />
      <TaskColumn icon={Progress} name='In Progress' tasks={tasks} status='progress' />
      <TaskColumn icon={Done} name='Done' tasks={tasks} status='done' />
    </main>
  )
}

export default Main;