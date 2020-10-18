import React from 'react';
import Accordion from './components/Accordion';
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

const App = () => {
  return (
    <div>
      <h1>Widgets</h1>
      <SearchBar />
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
