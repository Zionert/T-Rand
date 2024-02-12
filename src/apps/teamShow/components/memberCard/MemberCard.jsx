import React from 'react'
import './MemberCard.scss'

function MemberCard({theme}) {
  return (
    <div className='card_wrapper'>
        <input className={`input_member  ${theme}`} type='text' placeholder='Enter name'></input>
    </div>
  )
}

export default MemberCard