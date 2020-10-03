import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      ...this.state,
      textSearch: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.textSearch);
    this.setState({ textSearch: '' });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Bar</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.textSearch}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
