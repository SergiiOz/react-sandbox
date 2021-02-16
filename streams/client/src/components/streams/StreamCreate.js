import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/actionsCreator';
import StreamForm from '../StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (value) => {
    this.props.createNewStream(value);
  };

  render() {
    return (
      <div>
        <h2>Stream Create</h2>
        <div>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewStream: (value) => dispatch(createStream(value)),
  };
};

export default connect(null, mapDispatchToProps)(StreamCreate);
