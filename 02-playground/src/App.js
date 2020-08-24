import React, { useState } from "react";
import "./App.css";
import MyComponent from "./Components/ClassesBased";
import FunctionalCmp from "./Components/FunctionBased";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import JsxDemo from "./JsxDemo/JsxDemo";
import Parent from "./PropsDemo/Parent";
import ErrorBoundaryDemo from "./ErrorBoundaryDemo/ErrorBoundaryDemo";
import ErrorBoundary from "./hoc/ErrorBoundary";
import Notes from "./NotesApp/Notes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropsParent from "./PropTypesDemo/PropsParent";
import FormValidationDemo from "./FormValidationDemo/FormValidationDemo";
import HooksDemo from "./HooksDemo/HooksDemo";
import Posts from "./Posts/Posts";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Posts/Header/Header";
import FullPost from "./Posts/FullPost/FullPost";
import NewPost from "./Posts/NewPost/NewPost";

function App() {
  let [showHooksDemo, setShowHooksDemo] = useState(true);
  let [showNewPost, setShowNewPost] = useState(true);
  return (
    <div className="container">
      {/* <h3>React Playground</h3>
      <hr /> */}

      {/* <button
        onClick={() => {
          setShowNewPost(!showNewPost);
        }}
      >
        Toggle New Post
      </button> */}

      <BrowserRouter>
        <Header />

        <Switch>
          {/* {showNewPost ? <Route
            path="/posts/new-post"
            render={() => <div>Coming soon...</div>}
          /> : <Redirect to="/posts" />} */}

          <Route
            path="/posts/new-post"
            component = {NewPost}
            // render={() => <div>Coming soon...</div>}
          />

          <Route path="/posts" component={Posts} />

          <Redirect from="/" to="/posts" />
        </Switch>
        {/* <Route path="/posts/:id" component={FullPost} /> */}
      </BrowserRouter>

      {/* <button onClick={() => setShowHooksDemo(!showHooksDemo)}>Toggle Hooks Demo</button>
    
    {showHooksDemo ? <HooksDemo /> : null} */}

      {/* <FormValidationDemo /> */}

      {/* <PropsParent /> */}

      {/* <Notes /> */}

      {/* <hr /> */}
      {/* <ErrorBoundary>
        <ErrorBoundaryDemo />
      </ErrorBoundary> */}
      {/* <Parent /> */}
      {/* <hr /> */}
      {/* <JsxDemo /> */}
      {/* <hr /> */}
      {/* <LifeCycleDemo /> */}
      {/* <hr /> */}
      {/* <MyComponent /> */}
      {/* <FunctionalCmp /> */}
    </div>
  );
}

export default App;

// http://localhost:3000/posts    ->  component -> Posts
// http://localhost:3000/posts/new-post    ->  component -> NewPost
//
