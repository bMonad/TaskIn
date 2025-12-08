import '../styles/TaskColumn.css'
import Todo from '../assets/direct-hit.png';

const TaskColumn = ({ icon, name }) => {
  return (
    <section className="task_column">
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt='Todo' /> {name}
      </h2>
    </section>
  )
}

export default TaskColumn