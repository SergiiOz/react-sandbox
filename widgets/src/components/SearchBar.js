import React, { useEffect, useState } from 'react';
import { wikipediaApi } from '../api/wikipedia';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [requestText, setRequestText] = useState('programming');
  const [responseResult, setResponseResult] = useState([]);

  const onSetSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setRequestText(searchText);
    setSearchText('');
  };

  useEffect(() => {
    const onGetResult = async (text) => {
      const result = await wikipediaApi.getSearchResponse(text);
      console.log(result);
      setResponseResult(result.data.query.search);
    };
    //call function
    onGetResult(requestText);
  }, [requestText]);

  return (
    <div>
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="ui field">
            <label>Enter Search Term</label>
            <input value={searchText} onChange={onSetSearchText} />
          </div>
        </form>
      </div>
      <div>{responseResult.length}</div>
    </div>
  );
};

export default SearchBar;
