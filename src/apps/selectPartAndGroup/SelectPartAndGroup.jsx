import React, { useContext, useState } from 'react'
import SelectGroup from './components/selectGroup/SelectGroup.jsx'
import SelectPart from './components/selectPart/SelectPart.jsx'
import TeamShow from '../teamShow/TeamShow.jsx'
import { ThemeContext } from '../../context/ThemeContext.jsx'

import './SelectPartAndGroup.scss'

const SelectPartAndGroup = () => {

  const { theme } = useContext(ThemeContext)
  const [members, setMembers] = useState([])
  const [selectPart, setSelectPart] = useState(0)
  const [selectGroup, setSelectGroup] = useState(0)
  const [buttonPress, setButtonPress] = useState(false)

  const handlePartChange = (value) => {
    setSelectPart(value)
    setMembers([])
  }

  const handleGroupChange = (value) => {
    setSelectGroup(value)
    setMembers([])
  }

  const handleRandom = (membersList) => {
      if (members) {
        const copyArray = membersList;
        for (let i = copyArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = copyArray[i];
          copyArray[i] = copyArray[j];
          copyArray[j] = temp;
      }
        setMembers(copyArray) 
        setButtonPress(!buttonPress)
      }
      console.log('Members:', members)
  }

  return (
    <div>
      <div className={`Container ${theme}`}>
          <div className='SelectionWrapper'>
              <SelectPart
                theme={theme} 
                onSelectPart={handlePartChange}
              />
              <SelectGroup 
                theme={theme} 
                onSelectGroup={handleGroupChange}
              />       
          </div>
        <div>
          <button
            onClick={() => handleRandom(members)}
            className='Randomizer'>
            Randomize
          </button>
        </div>
      </div>
      <TeamShow
        members={members} 
        setMembers={setMembers} 
        theme={theme} 
        selectedPart={selectPart} 
        selectedGroup={selectGroup}
        buttonPress={buttonPress}
      />  
    </div>
  )
}

export default SelectPartAndGroup 