import React from 'react';
import { youtubeAPI } from './api/youtube';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    //default request
    this.onSearchFormSubmit('cars');
  }

  //send request to api and set video list after response
  onSearchFormSubmit = (textForm) => {
    youtubeAPI.getVideos(textForm).then((response) => {
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    });
  };

  onVideoSelect = (video) => {
    // console.log('Selected video', video);
    this.setState({
      selectedVideo: video,
    });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
