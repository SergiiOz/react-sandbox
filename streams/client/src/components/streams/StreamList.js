import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions/actionsCreator';
import { connect } from 'react-redux';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getListStreams();
  }

  render() {
    return (
      <div>
        <h2>Stream List</h2>
        <div>
          <Link to="/streams/details">Stream Details</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListStreams: () => dispatch(fetchStreams()),
  };
};

export default connect(null, mapDispatchToProps)(StreamList);
