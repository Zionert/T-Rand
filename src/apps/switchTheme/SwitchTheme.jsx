import React, { useState } from 'react'
import "./SwitchTheme.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const SwitchTheme = () => {

  const [theme, setTheme] = useState(false)
  
  const changeTheme = () => {
    setTheme(!theme);
  };


  return (
    <div>
        <button onClick={changeTheme}>
        <div>
        {!theme ? (
            <FontAwesomeIcon icon={faSun} className='Icon Sun' />
          ) : (
            <FontAwesomeIcon icon={faMoon} className='Icon Moon'/>
          )}
        </div>
        </button>
    </div>
  )
}

export default SwitchTheme