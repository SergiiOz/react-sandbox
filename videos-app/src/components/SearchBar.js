import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchText: '',
  };

  onInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchFormSubmit(this.state.searchText);
    //clear input
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
