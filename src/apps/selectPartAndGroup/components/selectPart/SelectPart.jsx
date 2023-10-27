import React from 'react'
import DropDown from '../dropDown/DropDown'
import './SelectPart.scss'
const SelectPart = () => {
  return (
    <div className='SelectPart'>
        <div>Number of participants</div>
        <DropDown />
    </div>
  )
}

export default SelectPart