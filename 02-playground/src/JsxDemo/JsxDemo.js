import React from "react";
import Auxillary from '../hoc/Auxillary';

class JsxDemo extends React.Component {
  render() {
    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement("p", {}, "JSX with Paragraph")
    // );

    return (
      <Auxillary>
        <div><p> JSX Demo </p></div>
        <div>Second Root element</div>
      </Auxillary>    
    );
  }
}

export default JsxDemo;
