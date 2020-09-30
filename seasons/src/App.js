import React from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      latitude: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //change STATE
        this.setState({
          ...this.state,
          latitude: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          ...this.state,
          errorMessage: error.message,
        });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && !this.state.latitude && (
          <div>Error: {this.state.errorMessage}</div>
        )}
        {!this.state.errorMessage && this.state.latitude && (
          <SeasonDisplay latitude={this.state.latitude}/>
        )}
        {!this.state.errorMessage && !this.state.latitude && (
          <div>Loading...</div>
        )}
        {/* <SeasonDisplay /> */}
      </div>
    );
  }
}

export default App;
