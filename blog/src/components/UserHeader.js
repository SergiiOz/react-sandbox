import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actionCreators';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

//ownProps - this is props from component UserHeader
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
