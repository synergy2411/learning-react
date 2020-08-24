import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import * as axios from "axios";
import Post from "./Post/Post";
import FullPost from "./FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.default
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        const posts = response.data.slice(0, 4);
        this.setState({ posts });
      })
      .catch((err) => console.log(err));
  }

  onSelectPost = id => {
      this.props.history.push("/posts/"+id);
  }

  render() {
    console.log("POSTS : ", this.props);

    let posts = null;
    if (this.state.posts) {
      posts = this.state.posts.map((post) => {
          return <Post {...post} key={post.id} 
            onHandleClick={() => this.onSelectPost(post.id)}/>
        // return <Link to={"/posts/"+post.id} key={post.id}>
        //         <Post {...post} />
        //        </Link>
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">{posts}</div>
          <div className="col-sm-8">
          <Route exact path="/posts/:id" component={FullPost} />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
