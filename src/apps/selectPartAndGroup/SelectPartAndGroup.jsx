import React from 'react'
import './SelectPartAndGroup.scss'
import SelectGroup from './components/selectGroup/SelectGroup.jsx'
import SelectPart from './components/selectPart/SelectPart.jsx'

const SelectPartAndGroup = () => {
  return (
    <div>
      <div className='Container'>
          <div className='SelectionWrapper'>
              <SelectPart />
              <SelectGroup />       
          </div>
        <div>
          {/* <button className='Randomizer'>Randomize</button> */}
        </div>
      </div>   
    </div>
  )
}

export default SelectPartAndGroup