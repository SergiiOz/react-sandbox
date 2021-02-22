import React from 'react';
import Modal from '../Modal/Modal';
import history from '../../history';

const StreamDelete = () => {
  const onDismiss = () => {
    history.push('/');
  };

  const actions = (
    <React.Fragment>
      <button>Delete</button>
      <button>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <h2> Stream Delete</h2>
      <Modal
        // if click on background - modal window off and redirect to '/'
        onDismiss={onDismiss}
        title="Stream Delete"
        description="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
