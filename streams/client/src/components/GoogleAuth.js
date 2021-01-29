import React from 'react';
import styles from './GoogleAuth.module.scss';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions/actionsCreator';

class GoogleAuth extends React.Component {
  //Authentical with Google Auth
  // ***clientId get from console.developer.google.com into project, credentials
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '', // <- ***CREDENTIAL insert into empty ''
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          //get status auth (true or false)
          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      //dispatch action
      //we get userId from api google and pass in function signIn
      return this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      //dispatch action
      return this.props.signOut();
    }
  };

  onSignInClick = () => {
    //method google auth
    this.auth.signIn();
  };

  onSignOutClick = () => {
    //method google auth
    this.auth.signOut();
  };

  authStatus() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        //BUTTON SIGN OUT
        <button
          className={styles.buttonAuth}
          onClick={
            this.onSignOutClick
            // window.gapi.auth2.getAuthInstance().signOut();
          }
        >
          Sign Out
        </button>
      );
    } else {
      return (
        //BUTTON SIGN IN
        <button
          className={styles.buttonAuth}
          onClick={
            this.onSignInClick
            // window.gapi.auth2.getAuthInstance().signIn();
          }
        >
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.authStatus()}</div>
      </div>
    );
  }
}

// connect with Redux
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userId) => dispatch(signIn(userId)),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
