// MemberCard.jsx
import React, { useEffect, useState } from 'react';
import './MemberCard.scss';

function MemberCard({ theme, members, setMembers, participantIndex, buttonPress }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const updatedMembers = [...members];
    updatedMembers[participantIndex - 1] = event.target.value;
    setMembers(updatedMembers);
    setInputValue(event.target.value);
    console.log(participantIndex - 1);
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
