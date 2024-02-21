import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext.jsx';

import './MemberCard.scss';

function MemberCard({ members, setMembers, participantIndex }) {
  const { theme, buttonPress } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const updatedMembers = [...members];
    updatedMembers[participantIndex - 1] = event.target.value;
    setMembers(updatedMembers);
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setInputValue(members[participantIndex - 1] || ''); 
  }, [buttonPress, participantIndex, members]);

  return (
    <div className='card_wrapper'>
      <input
        className={`input_member ${theme}`}
        type='text'
        value={inputValue}
        placeholder='Enter name'
        onChange={handleChange}
      />
    </div>
  );
}

export default MemberCard;
