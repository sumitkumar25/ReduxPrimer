import React from "react";
import { connect } from "react-redux";
import { fetchBlogPosts } from "./../../actions/index";
import UserHeader from './user-header';
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderList() {
    return this.props.posts.map(list => {
      return <li key={list.id}>
        <h2>{list.title}</h2>
        <p>{list.body}</p>
        <UserHeader userId={list.userId}></UserHeader>
      </li>
    })
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchBlogPosts })(PostList);


