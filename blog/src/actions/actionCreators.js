import jsonPlaceholder from '../apis/jsonPlaceholder';

//POSTS
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

//USERS
export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: 'FETCH_USER',
      payload: response.data,
    });
  };
};
