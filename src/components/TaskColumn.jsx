import '../styles/TaskColumn.css'
import Todo from '../assets/direct-hit.png';
import TaskCard from './TaskCard';

const TaskColumn = ({ icon, name, tasks, status }) => {
  return (
    <section className="task_column">
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt='Todo' /> {name}
      </h2>

      {tasks.filter(task => task.status === status).length ? (
        tasks.filter(task => task.status === status).map((task, index) => (
          <TaskCard key={index} task={task} />
        ))
      ) : (
        <p className="empty_column">No tasks</p>
      )}
    </section>
  )
}

export default TaskColumn