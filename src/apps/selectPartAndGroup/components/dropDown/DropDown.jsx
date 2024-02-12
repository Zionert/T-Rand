import React, { useContext, useState, useRef, useEffect } from 'react';
import './DropDown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../../../context/ThemeContext';

const DropDown = ({ options, onSelect }) => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(0);

  const changeValue = (item) => {
    onSelect(item);
    setDropdownValue(item);
    setIsOpen(false);
  };

  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`DropDown-Wrapper ${theme}`}>
      <button
        ref={buttonRef}
        className='btnDrop'
        onClick={handleButtonClick}
        data-active={isOpen}
      >
        {dropdownValue !== 0 ? dropdownValue : ' '}
        {!isOpen ? (
          <FontAwesomeIcon icon={faCaretDown} className='caret' />
        ) : (
          <FontAwesomeIcon icon={faCaretUp} className='caret' />
        )}
      </button>

      {isOpen && (
        <ul ref={menuRef} className='DropdownList'>
          <li className='Invisible'>0</li>
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
