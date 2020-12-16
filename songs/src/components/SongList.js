import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    // console.log(this.props);
    return this.props.songs.map((song, index) => {
      return <div key={index}>{song.title}</div>;
    });
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(SongList);
