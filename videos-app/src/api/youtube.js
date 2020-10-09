import axios from 'axios';

const KEY = 'AIzaSyCUw8oIYKtef2eZPUWH5f4VLnuRNOgpQSM';

const instanceAxios = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const youtubeAPI = {
  getVideos(queryText) {
    return instanceAxios
      .get(`/search`, {
        params: {
          part: 'snippet',
          q: queryText,
          maxResults: 5,
          type: 'video',
          key: `${KEY}`,
        },
      })
      
  },
};
