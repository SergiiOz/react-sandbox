import React, { useEffect, useState } from 'react';
// import { youtubeAPI } from './api/youtube';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import useVideo from './hooks.js/useVideo';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  //custom hooks (fetch data from API)
  //Destructuring array 'videos' and function 'onSearch'
  const [videos, onSearch] = useVideo('cars');

  useEffect(() => {
    //set default selected video
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const [videos, setVideos] = useState([]);

  // //send request to api and set video list after response
  // const onSearchFormSubmit = (textForm) => {
  //   youtubeAPI.getVideos(textForm).then((response) => {
  //     setVideos(response.data.items);
  //     setSelectedVideo(response.data.items[0]);
  //   });
  // };

  // useEffect(() => {
  //   //default request
  //   onSearchFormSubmit('cars');
  // }, []);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSearchFormSubmit={onSearch} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
