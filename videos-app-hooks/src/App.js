import React, { useEffect, useState } from "react";
import { youtubeAPI } from "./api/youtube";

import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //send request to api and set video list after response
  const onSearchFormSubmit = (textForm) => {
    youtubeAPI.getVideos(textForm).then((response) => {
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    });
  };

  const onVideoSelect = (video) => {
    // console.log('Selected video', video);
    setSelectedVideo(video);
    console.log(selectedVideo);
  };

  useEffect(() => {
    //default request
    onSearchFormSubmit("cars");
  }, []);

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchFormSubmit={onSearchFormSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
