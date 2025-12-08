import TaskColumn from "../components/TaskColumn";
import Todo from '../assets/direct-hit.png';
import Progress from '../assets/glowing-star.png';
import Done from '../assets/check-mark-button.png';

const Main = () => {
  return (
    <main className="app_main">
      <TaskColumn icon={Todo} name='Todo' />
      <TaskColumn icon={Progress} name='In Progress' />
      <TaskColumn icon={Done} name='Done' />
    </main>
  )
}

export default Main;