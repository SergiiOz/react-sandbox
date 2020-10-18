import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

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
    <div className="ui form">
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
