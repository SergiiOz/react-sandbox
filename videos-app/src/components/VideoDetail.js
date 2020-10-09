import React from 'react';

const VideoDetail = (props) => {
  return (
    <div>
      {!props.selectedVideo ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            src={props.selectedVideo.snippet.thumbnails.high.url}
            alt="something"
          />
          <div className="ui segment">
            <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
            <p>{props.selectedVideo.snippet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
