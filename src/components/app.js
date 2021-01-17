import React from "react";
import PostList from './blog/post-list';
import SongList from './song-list';
const App = () => {
  return (
    <section>
      <h1>React redux</h1>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column six wide">
            <h2>Song listing Component</h2>
            <SongList></SongList>
          </div>
          <section className="column six wide">
            <h2>Blog listing Component</h2>
            <PostList></PostList>
          </section>
        </div>
      </div>
    </section>
  );
};
export default App;
