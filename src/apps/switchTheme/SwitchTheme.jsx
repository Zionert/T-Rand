import React from 'react'
import "./SwitchTheme.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const SwitchTheme = ({ setTheme, theme }) => {

  return (
    <div className={theme}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
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