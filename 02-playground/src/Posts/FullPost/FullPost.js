import React, { useEffect, Component } from "react";
import * as axios from "axios";

class FullPost extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
        this.loadPost();
  }
  componentDidUpdate(){
    this.loadPost();
  }
  componentWillUnmount(){
    //   clean up code
  }

  loadPost = () => {
    let { id } = this.props.match.params;
    axios.default
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        // console.log(response);
        let post = response.data;
        this.setState({ post });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let postTitle = null, postBody = null;
    if (this.state.post) {
      postTitle = <p className="text-center">{this.state.post.title.toUpperCase()}</p>;
        postBody = <p>{this.state.post.body}</p>
    }
    return (
      <div className="card">
          <div className="card card-header">
              {postTitle}
          </div>
          <div className="card card-body">
              {postBody}
          </div>
      </div>
    );
  }
}

export default FullPost;
