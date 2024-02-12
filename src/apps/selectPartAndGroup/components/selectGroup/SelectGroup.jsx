import React from 'react'
import './SelectGroup.scss'
import DropDown from '../dropDown/DropDown.jsx'

const SelectGroup = ({ onSelectGroup }) => {

  const options = [1, 2, 4]

  return (
    <div className='SelectGroup'>
      <div className='text'>Number of teams</div>
      <DropDown 
        options={options}
        onSelect={onSelectGroup}
      />
    </div>
  )
}

export default SelectGroup  