import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/actionsCreator';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getEditStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.editStream) {
      return <div>...Loading</div>;
    }
    // console.log(this.props.editStream);
    //EDIT STREAM
    const { title, description } = this.props.editStream;
    return (
      <div>
        <h2>Stream Edit</h2>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  }
}

//ownProps - it's props from component StreamEdit

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    editStream: state.streams[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEditStream: (id) => dispatch(fetchStream(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
