import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  const onInputTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={onInputTextChange} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <div>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
