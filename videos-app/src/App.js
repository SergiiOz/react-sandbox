import React from 'react';

import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    videos: [],
  };

  onSearchFormSubmit = (textForm) => {
    console.log(textForm);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit} />
      </div>
    );
  }
}

export default App;
