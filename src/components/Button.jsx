import React from 'react'
import { statusButton } from '../constants/buttonConstants';

const Button = ({ type, element, onClick }) => {
  const bType = type === 'submit' ? 'submit' : 'button';

  switch (type) {
    case "tag":
    case "submit":
      return (
        <button type={bType} className={type} onClick={onClick}>
          {element}
        </button>
      )

    case "status":
      return (
        <select className='task_status' onClick={onClick}>
          {statusButton.map((item, index) => (
            <option key={index} value={item.value}>
              {item.tagName}
            </option>
          ))}
        </select>
      )
  }
}

export default Button