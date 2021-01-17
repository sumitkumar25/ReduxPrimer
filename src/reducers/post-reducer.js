import { ACTIONS } from "../actions/actions-constants";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_BLOG_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
