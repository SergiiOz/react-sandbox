import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javaScript library',
  },
  {
    title: 'Why use React?',
    content: 'React is favourite JS libraty among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <h1>Widgets</h1>
      {/* <SearchBar /> */}
      {/* <Accordion items={items} /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
