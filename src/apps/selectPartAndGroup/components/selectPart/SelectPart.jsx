import React from 'react'
import DropDown from '../dropDown/DropDown.jsx'

import './SelectPart.scss'

const SelectPart = ({ onSelectPart }) => {

  const options = [4, 8, 16]

  return (
    <div className='SelectPart'>
      <div className='text'>Number of participants</div>
      <DropDown
        options={options}
        onSelect={onSelectPart}
      />
    </div>
  )
}

export default SelectPart