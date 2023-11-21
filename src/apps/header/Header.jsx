import React from 'react'
import './Header.scss'
import SwitchTheme from '../switchTheme/SwitchTheme'

const Header = () => {
  return (
    <div className='Header'>
      <h1 className="Title">T-Rand</h1>
      <SwitchTheme />
    </div>
  )
}

export default Header
