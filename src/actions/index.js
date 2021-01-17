import { ACTIONS } from "./actions-constants";
import _ from 'lodash';
export const selectSong = (song) => {
  return {
    type: ACTIONS.SONG_SELECTED,
    payload: song,
  };
};

export const fetchBlogPosts = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch({
      type: ACTIONS.FETCH_BLOG_POSTS,
      payload: data,
    });
  };
};

export const fetchUserData = (id) => {
  return (dispatch) => {
    _fetchUserData(id, dispatch);
  }
}

const _fetchUserData = _.memoize(async function (id, dispatch) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await response.json();
  dispatch({
    type: ACTIONS.FETCH_USER_DETAILS,
    payload: data,
  });
});

