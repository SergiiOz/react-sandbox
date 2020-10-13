import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://en.wikipedia.org/w/api.php`,
});

export const wikipediaApi = {
  getSearchResponse(textSearch) {
    return instanceAxios.get(
      `?action=query&list=search&format=json&srsearch=${textSearch}`
    );
  },
};
