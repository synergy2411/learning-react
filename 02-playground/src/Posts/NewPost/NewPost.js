import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

class NewPost extends React.Component {
  state = {
    isAuth: true,
  };
  render() {
    let redirect = null;
    if (!this.state.isAuth) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <Fragment>
        {redirect}
        <button
          onClick={() => {
            this.setState({ isAuth: !this.state.isAuth });
          }}
        >
          Toggle Auth
        </button>
      </Fragment>
    );
  }
}

export default NewPost;
