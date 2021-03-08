import React from 'react';
//import from library flv.js
import flv from 'flv.js';
import { fetchStream } from './../../actions/actionsCreator';
import { connect } from 'react-redux';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <h2>Stream Show</h2>

        <video ref={this.videoRef} style={{ width: '100%' }} controls />

        <h4>
          Show stream: <strong>{title}</strong>
        </h4>
        <p>{description}</p>
      </div>
    );
  }
}

//ownProps - it's props from component StreamShow
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStream: (id) => dispatch(fetchStream(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
