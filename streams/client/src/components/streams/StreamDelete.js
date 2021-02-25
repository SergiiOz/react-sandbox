import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from './../../actions/actionsCreator';
import Modal from '../Modal/Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  //FETCH STREAM
  componentDidMount() {
    console.log('deleteStream', this.props);
    this.props.getStream(this.props.match.params.id);
  }

  //CONTENT
  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete stream with title: "${this.props.stream.title}"?`;
  };

  //BUTTONS
  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={this.onDelete}>Delete</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </React.Fragment>
    );
  };

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    return (
      <Modal
        // if click on background - modal window off and redirect to '/'
        onDismiss={() => history.push('/')}
        title="Stream Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}

//ownProps - it's props from component StreamDelete
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStream: (id) => dispatch(fetchStream(id)),
    deleteStream: (id) => dispatch(deleteStream(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
