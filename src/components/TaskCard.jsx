import '../styles/TaskCard.css'
import Delete from '../assets/delete.png'
import Button from './Button';

const TaskCard = ({ task }) => {
  return (
    <article className='task_card'>
      <p className='task_text'>
        {task.task}
      </p>

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {task.tags.map((tag, index) => (
            <Button key={index} type='tag' element={tag} />
          ))}
        </div>
        <div className='task_delete'>
          <img src={Delete} alt='delete task' className='delete_icon' />
        </div>
      </div>
    </article>
  )
}

export default TaskCard;