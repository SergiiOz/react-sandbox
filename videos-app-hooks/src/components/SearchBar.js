import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  // state = {
  //   searchText: '',
  // };

  const onInputChange = (event) => {
    setSearchText(event.target.value);
    // this.setState({
    //   searchText: event.target.value,
    // });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchFormSubmit(searchText);
    //clear input
    setSearchText("");
    // this.setState({ searchText: '' });
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" onChange={onInputChange} value={searchText} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
