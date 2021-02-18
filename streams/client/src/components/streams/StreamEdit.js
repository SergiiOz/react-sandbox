import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/actionsCreator';
import StreamForm from '../StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getEditStream(this.props.match.params.id);
  }

  //need add editStreamAction and id
  onSubmit = (formValue) => {
    this.props.editStreamAction(this.props.match.params.id, formValue);
  };

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
        <StreamForm
          //initialValues special name properties redux form - for pass value into an input
          initialValues={{
            title: title,
            description: description,
          }}
          //anothey way, with lodash
          //initialValues{_.pick(this.props.editStream, 'title', 'description')}

          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//ownProps - it's props from component StreamEdit

const mapStateToProps = (state, ownProps) => {
  // console.log('ownProps', ownProps);
  return {
    editStream: state.streams[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEditStream: (id) => dispatch(fetchStream(id)),
    editStreamAction: (id, formValue) => dispatch(editStream(id, formValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
