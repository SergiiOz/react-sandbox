import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from './../actions/actionCreators';

class SongList extends React.Component {
  //helper
  renderlist() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.select(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderlist()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    select: (song) => dispatch(selectSong(song)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
