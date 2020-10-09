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

  //send request to api and set video list after response
  onSearchFormSubmit = (textForm) => {
    youtubeAPI.getVideos(textForm).then((response) => {
      this.setState({ videos: response.data.items });
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
        <div>
          <VideoDetail selectedVideo={this.state.selectedVideo} />

          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
          <div>
            {this.state.selectedVideo && this.state.selectedVideo.snippet.title}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
