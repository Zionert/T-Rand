import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import "./SwitchTheme.scss"

const SwitchTheme = ({ setTheme, theme }) => {

  const handleSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={theme}>
        <button onClick={handleSwitchTheme}>
          {theme === 'light' ? (
            <div className='Toggle'>
              <FontAwesomeIcon icon={faToggleOff} className='Switch'/>
              Light Mode
            </div>
          ) : (
            <div className='Toggle'>
              <FontAwesomeIcon icon={faToggleOn} className='Switch'/>
              Dark Mode
            </div>
          )}
        </button>
    </div>
  )
}

export default SwitchTheme