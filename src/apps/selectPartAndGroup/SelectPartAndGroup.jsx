import React, { useContext, useState } from 'react'
import './SelectPartAndGroup.scss'
import SelectGroup from './components/selectGroup/SelectGroup.jsx'
import SelectPart from './components/selectPart/SelectPart.jsx'
import TeamShow from '../teamShow/TeamShow.jsx'
import { ThemeContext } from '../../context/ThemeContext.jsx'

const SelectPartAndGroup = () => {

  const { theme } = useContext(ThemeContext)
  const [selectPart, setSelectPart] = useState(0)
  const [selectGroup, setSelectGroup] = useState(0)

  const handlePartChange = (value) => {
    setSelectPart(value)
  }

  const handleGroupChange = (value) => {
    setSelectGroup(value)
  }



  return (
    <div>
      <div className={`Container ${theme}`}>
          <div className='SelectionWrapper'>
              <SelectPart theme={theme} onSelectPart={handlePartChange}/>
              <SelectGroup theme={theme} onSelectGroup={handleGroupChange}/>       
          </div>
        <div>
          <button className='Randomizer'>Randomize</button>
        </div>
      </div>
      <TeamShow theme={theme} selectedPart={selectPart} selectedGroup={selectGroup} />  
    </div>
  )
}

export default SelectPartAndGroup 