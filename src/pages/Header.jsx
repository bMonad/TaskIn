import { useRef, useState } from "react";
import Button from "../components/Button";
import { tagButton, submitButton } from "../constants/buttonConstants";
import '../styles/Header.css'

const Header = ({ setTask }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  });

  const clearBtnRef = useRef(null);
  const clearBtn = clearBtnRef.current;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (clearBtn) {
      clearBtn.style.visibility = value.length ? 'visible' : 'hidden';
    }
  }

  const handleClear = () => {
    setTaskData((prev) => ({
      ...prev,
      task: ""
    }));
    if (clearBtn) {
      clearBtn.style.visibility = 'hidden';
    }
  }

  const handleClick = (element) => {
    setTaskData((prev) => {
      const tags = prev.tags.includes(element)
        ? prev.tags.filter(tag => tag !== element)
        : [...prev.tags, element];
      return {
        ...prev,
        tags: tags
      };
    });
  }

  console.log(taskData.tags);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Task Data:", taskData);

    setTaskData({
      task: "",
      status: "todo",
      tags: []
    });
    setTask((prev) => ([...prev, taskData]));
    handleClear();
  }

  return (
    <header className="app_header">
      <form className="task_form" onSubmit={handleSubmit}>
        <span className="text-input-wrapper">
          <input
            type="text"
            name="task"
            className="task_input"
            placeholder="Enter your task"
            value={taskData.task}
            onChange={handleInputChange}
          />
          <span ref={clearBtnRef} title="Clear" onClick={handleClear}>&times;</span>
        </span>

        <div className="task_form_bottom_line">
          <div>
            {tagButton.map((item, idx) => (
              <Button key={idx} type={item.type} element={item.tagName} handleClick={handleClick} selected={taskData.tags.includes(item.tagName)} />
            ))}
          </div>

          <div>
            <Button type='status' value={taskData.status} onChange={handleInputChange} />

            {submitButton.map((item, idx) => (
              <Button key={idx} type={item.type} element={item.tagName} />
            ))}
          </div>
        </div>
      </form>
    </header>
  )
}

export default Header;