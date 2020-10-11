import React from 'react';

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>Loading ... </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
        <p>{props.selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
