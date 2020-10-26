import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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

  // //NAVIGATION
  // const showWidgets = () => {
  //   const pathFromUrl = window.location.pathname;
  //   switch (pathFromUrl) {
  //     case '/':
  //       return <Accordion items={items} />;

  //     case '/list':
  //       return <SearchBar />;

  //     case '/dropdown':
  //       return (
  //         <Dropdown
  //           options={options}
  //           selected={selected}
  //           onSelectedChange={setSelected}
  //         />
  //       );

  //     case '/translate':
  //       return <Translate />;

  //     default:
  //       return <div>Don't have page...</div>;
  //   }
  // };
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <SearchBar />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
