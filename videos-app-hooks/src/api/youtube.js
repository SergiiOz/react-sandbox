import axios from 'axios';

//key need create in console.developers.google.com
//YouTube Data Api v3
//Credentials
// const KEY = 'the key must be inserted here';
const KEY = 'AIzaSyAFHXceuABda4H5a3Y9V90_Ivwi1nXj-6k';

const instanceAxios = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const youtubeAPI = {
  getVideos(queryText) {
    return instanceAxios.get(`/search`, {
      params: {
        part: 'snippet',
        q: queryText,
        maxResults: 5,
        type: 'video',
        key: `${KEY}`,
      },
    });
  },
};
