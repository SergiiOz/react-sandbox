import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want if That Way', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default compineReducer({
  song: songsReducer,
  selectedSong: selectedSongReducer,
});
