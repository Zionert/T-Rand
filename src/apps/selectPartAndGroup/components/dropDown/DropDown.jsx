import React, { useState } from 'react';
import './DropDown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(0);

  const changeValue = (item) => {
    setDropdownValue(item);
    setIsOpen(false);
  };

  return (
    <div className='DropDown-Wrapper'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div>
          {dropdownValue !== 0 ? dropdownValue : ' '}
        </div>

        <div>
          {!isOpen ? (
            <FontAwesomeIcon icon={faCaretUp} className='caret' />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} className='caret' />
          )}
        </div>
      </button>

      {isOpen && (
        <ul>
          <li style={{visibility: 'hidden', background: 'none', height: '0.01px', zIndex: '-1'}}>0</li>
          {options.map((item, index) => (
            <li key={index} onClick={() => changeValue(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
