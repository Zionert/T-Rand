import React from 'react'
import DropDown from '../dropDown/DropDown'
import './SelectGroup.scss'
const SelectGroup = () => {
  return (
    <div className='SelectGroup'>
      <div>Number of groups</div>
      <DropDown />
    </div>
  )
}

export default SelectGroup  