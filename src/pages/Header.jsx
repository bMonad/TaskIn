import Button from "../components/Button";
import { tagButton, submitButton } from "../constants/buttonConstants";
import '../styles/Header.css'

const Header = () => {

  const handleClick = () => {

  }

  return (
    <header className="app_header">
      <form>
        <input type="text" name="task-input" className="task_input" placeholder="Enter your task" />

        <div className="task_form_bottom_line">
          <div>
            {tagButton.map((item, idx) => (
              <Button key={idx} type={item.type} element={item.tagName} onClick={handleClick} />
            ))}
          </div>

          <div>
            <Button type='status' />

            {submitButton.map((item, idx) => (
              <Button key={idx} type={item.type} element={item.tagName} onClick={handleClick} />
            ))}
          </div>
        </div>
      </form>
    </header>
  )
}

export default Header;