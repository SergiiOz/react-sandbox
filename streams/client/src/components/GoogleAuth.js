import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions/actionsCreator';
import Button from '../components/button/Button';

class GoogleAuth extends React.Component {
  //Authentical with Google Auth
  // ***clientId get from console.developer.google.com into project, credentials
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '37737671711-cf4kkadmrftdegeiv1se0tvmprhep8l5.apps.googleusercontent.com', // <- ***CREDENTIAL insert into empty ''
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
        <Button
          nameButton={'Sign Out'}
          onButtonClick={this.onSignOutClick}
          // window.gapi.auth2.getAuthInstance().signOut();
          styleButton={{ backgroundColor: '#e98dccfe' }}
        />
      );
    } else {
      return (
        //BUTTON SIGN IN
        <Button
          nameButton={'Sign In with Google'}
          onButtonClick={this.onSignInClick}
          // window.gapi.auth2.getAuthInstance().signIn();
          styleButton={{ backgroundColor: '#e98dccfe' }}
        />
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
