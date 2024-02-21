import React from 'react'
import SwitchTheme from '../switchTheme/SwitchTheme'

import './Header.scss'

const Header = ({ setTheme, theme }) => {
  return (
    <div className='Header'>
      <h1 className="Title">T-Rand</h1>
      <SwitchTheme 
        setTheme={setTheme}
        theme={theme}
      />
    </div>
  )
}

export default Header
