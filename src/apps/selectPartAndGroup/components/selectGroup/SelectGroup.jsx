import React from 'react'
import DropDown from '../dropDown/DropDown.jsx'

import './SelectGroup.scss'

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