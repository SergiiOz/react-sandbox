import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions/actionsCreator';
import { connect } from 'react-redux';
import Button from '../button/Button';

import styles from './StreamList.module.scss';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getListStreams();
  }

  renderAdmin = (stream) => {
    // console.log("stream id", stream.id, "currentId", this.props.currentUserId);
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>
            <Button
              nameButton="EDIT"
              styleButton={{ backgroundColor: 'lightblue' }}
            />
          </Link>
          <Button
            nameButton="DELETE"
            styleButton={{ backgroundColor: 'lightcoral' }}
          />
        </div>
      );
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new">
            <Button
              nameButton="Create Stream"
              styleButton={{ backgroundColor: 'yellow' }}
            />
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <li key={stream.id}>
          <div className={styles.listCard}>
            <div>
              <h4>{stream.title}</h4>
              <div>{stream.description}</div>
            </div>
            <div>{this.renderAdmin(stream)}</div>
          </div>
          <hr />
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Stream List</h2>
        <ol>{this.renderList()}</ol>
        <div>{this.renderCreate()}</div>
        <br />
        <div>
          <Link to="/streams/details">Stream Details</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams), //object state.streams convert to array
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListStreams: () => dispatch(fetchStreams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
