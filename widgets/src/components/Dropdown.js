import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const refForm = useRef();

  //close dropdawn if we click outside dropdown
  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log(event.target);
      //check if we clik into DOM el form
      if (refForm.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    //if element with refForm will be remove from DOM -> remove eventListener
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  // console.log(options);
  const renderedOptions = options.map((option, index) => {
    //doesn't show selected option.label two times
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.label + index}
        className="ui item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={refForm} className="ui form">
      <div className="ui field">
        <label className="ui label">Selected a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="ui dropdown icon"></i>
          <div className="ui text">{selected.label}</div>
          <div className={`ui menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
