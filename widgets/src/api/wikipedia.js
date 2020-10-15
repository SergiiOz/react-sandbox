import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://en.wikipedia.org/w/api.php`,
});

export const wikipediaApi = {
  getSearchResponse(searchText) {
    return instanceAxios.get(
      '',
      {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchText,
        },
      }
      // `?action=query&list=search&format=json&origin=*&srsearch=${searchText}`
    );
  },
};
