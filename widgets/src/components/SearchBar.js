import React, { useEffect, useState } from 'react';
import { wikipediaApi } from '../api/wikipedia';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('testing');
  const [debouncedText, setDebouncedText] = useState(searchText);
  const [responseResults, setResponseResults] = useState([]);

  const onSetSearchText = (event) => {
    setSearchText(event.target.value);
  };

  //if don't typing more then 1sec in input, will be change debouncedText
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(searchText);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  //when is changed debouncedText -> send request to API
  useEffect(() => {
    const onGetResult = async (text) => {
      const result = await wikipediaApi.getSearchResponse(text);
      console.log(result);
      setResponseResults(result.data.query.search);
    };

    onGetResult(debouncedText);
  }, [debouncedText]);

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
        <div className="ui field">
          <label>Enter Search Term</label>
          <input value={searchText} onChange={onSetSearchText} />
        </div>
      </div>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default SearchBar;
