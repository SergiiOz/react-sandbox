import axios from 'axios';

//work only on lacalhost:3000
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const instanceAxios = axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2`,
});

export const googleTranslateApi = {
  getTextTranslated(language, text) {
    return instanceAxios.post(
      '',
      {},
      {
        params: {
          q: text,
          target: language,
          key: KEY,
        },
      }
      // `?action=query&list=search&format=json&origin=*&srsearch=${searchText}`
    );
  },
};
