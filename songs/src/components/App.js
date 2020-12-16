import React from 'react';
import { selectSong } from '../actions/actionCreators';
import SongList from './SongList';

const App = () => {
  return (
    <div>
      <h1 className="Hello">Song</h1>
      <SongList />
    </div>
  );
};

export default App;
