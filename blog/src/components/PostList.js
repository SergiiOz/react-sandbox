import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actionCreators';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderList = () => {
    return this.props.posts.map((post) => (
      <div key={post.id}>
        <div className="ui relaxed divided list">
          <div className="item">
            <i className="large user circle middle aligned icon"></i>
            <div className="content">
              <a className="header" href="/#">
                {post.title}
              </a>
              <div className="description">{post.body}</div>
              <div>
                <UserHeader userId={post.userId} />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    ));
  };

  render() {
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
