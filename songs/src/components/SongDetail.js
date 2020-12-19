import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return (
    <div>
      <h1>Song Detail</h1>
      <h3>Title: {props.selectedSong && props.selectedSong.title}</h3>
      <p>Duration: {props.selectedSong && props.selectedSong.duration}</p>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapDispatchToProps)(SongDetail);
