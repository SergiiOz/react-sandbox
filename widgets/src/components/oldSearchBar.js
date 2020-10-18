//OLD SearchBar -> refuctoring to SearchBar
// Line 41:6:  React Hook useEffect has a missing dependency: 'responseResults.length'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

import React, { useEffect, useState } from 'react';
import { wikipediaApi } from '../api/wikipedia';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('testing');
  // const [requestText, setRequestText] = useState('programming');
  const [responseResults, setResponseResults] = useState([]);

  const onSetSearchText = (event) => {
    setSearchText(event.target.value);
  };

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   setRequestText(searchText);
  //   setSearchText('');
  // };

  useEffect(() => {
    const onGetResult = async (text) => {
      const result = await wikipediaApi.getSearchResponse(text);
      console.log(result);
      setResponseResults(result.data.query.search);
    };

    if (searchText && !responseResults.length) {
      onGetResult(searchText);
    } else {
      //call function
      //if don't typing more then 1sec in input, will be request to API
      const timeoutId = setTimeout(() => {
        if (searchText) {
          onGetResult(searchText);
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchText]);

  const renderedList = responseResults.map((result) => {
    return (
      <div key={result.pageid} className="ui item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go!
          </a>
        </div>
        <div className="ui content">
          <div className="ui header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        {/* <form onSubmit={onFormSubmit}> */}
        <div className="ui field">
          <label>Enter Search Term</label>
          <input value={searchText} onChange={onSetSearchText} />
        </div>
        {/* </form> */}
      </div>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default SearchBar;
