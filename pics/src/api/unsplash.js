import axios from 'axios';

//base config request
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID LjJDiSLXsd4B05hK9768DjM3xVCyj6dfZUY7_xs8LWo',
  },
});
