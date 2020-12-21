import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actionCreators';

class PostList extends React.Component {
  render() {
    return <div>Post List</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchPosts),
  };
};

export default connect(null, mapDispatchToProps)(PostList);
