import React, { useContext } from 'react'
import './SelectPartAndGroup.scss'
import SelectGroup from './components/selectGroup/SelectGroup.jsx'
import SelectPart from './components/selectPart/SelectPart.jsx'
import { ThemeContext } from '../../context/ThemeContext.jsx'

const SelectPartAndGroup = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <div className={`Container ${theme}`}>
          <div className='SelectionWrapper'>
              <SelectPart theme={theme}/>
              <SelectGroup theme={theme}/>       
          </div>
        <div>
          {/* <button className='Randomizer'>Randomize</button> */}
        </div>
      </div>   
    </div>
  )
}

export default SelectPartAndGroup