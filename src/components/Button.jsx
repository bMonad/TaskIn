import React from 'react'
import { statusButton } from '../constants/buttonConstants';

const Button = ({
  type,
  element,
  handleClick = () => { },
  value,
  onChange = () => { },
  selected = false,
}) => {
  const bType = type === 'submit' ? 'submit' : 'button';

  switch (type) {
    case "tag":
    case "submit":
      return (
        <button type={bType} className={`${type} ${selected ? 'selected' : ''}`} onClick={() => handleClick(element)}>
          {element}
        </button>
      )

    case "status":
      return (
        <select name='status' className='task_status' onChange={onChange} value={value}>
          {statusButton.map((item, index) => (
            <option
              key={index}
              value={item.value}>
              {item.tagName}
            </option>
          ))}
        </select>
      )
    default:
      return null;
  }
}

export default Button