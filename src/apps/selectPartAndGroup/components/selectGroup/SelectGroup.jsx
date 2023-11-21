import React from 'react'
import './SelectGroup.scss'
import DropDown from '../dropDown/DropDown.jsx'

const SelectGroup = () => {

  const options = [1, 2, 3, 4]

  return (
    <div className='SelectGroup'>
      <div className='text'>Number of teams</div>
      <DropDown 
        options={options}
      />
    </div>
  )
}

export default SelectGroup  