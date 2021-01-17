import { combineReducers } from "redux";
import { ACTIONS } from "./../actions/actions-constants";
import postReducer from "./post-reducer";
import userReducer from "./user-reducer";
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:05" },
    { title: "All Star", duration: "3:15" },
    { title: "Smells like teen spirit", duration: "4:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === ACTIONS.SONG_SELECTED) {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postReducer,
  users: userReducer
});
