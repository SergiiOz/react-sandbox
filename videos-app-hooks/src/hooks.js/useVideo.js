import { useState, useEffect } from 'react';
import { youtubeAPI } from '../api/youtube';

const useVideo = (defaultSearchText) => {
  const [videos, setVideos] = useState([]);

  //send request to api and set video list after response
  const onSearch = (textFromForm) => {
    youtubeAPI.getVideos(textFromForm).then((response) => {
      setVideos(response.data.items);
    });
  };

  useEffect(() => {
    onSearch(defaultSearchText);
  }, [defaultSearchText]);

  return [videos, onSearch]; //react convention use array
};

export default useVideo;
