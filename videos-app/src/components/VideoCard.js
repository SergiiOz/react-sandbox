import './VideoCard.css';
import React from 'react';

const VideoCard = (props) => {
  return (
    <div
      className="video-card item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <div className="image-wrapper">
        <img
          className="ui image"
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.thumbnails.title}
        />
      </div>
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
