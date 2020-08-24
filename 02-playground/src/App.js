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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropsParent from "./PropTypesDemo/PropsParent";
import FormValidationDemo from './FormValidationDemo/FormValidationDemo';
import HooksDemo from "./HooksDemo/HooksDemo";

function App() {
  let [showHooksDemo, setShowHooksDemo] = useState(true);
  
  return (
    <div className="container">
      <h3>React Playground</h3>
      <hr />

    <button onClick={() => setShowHooksDemo(!showHooksDemo)}>Toggle Hooks Demo</button>
    
    {showHooksDemo ? <HooksDemo /> : null}

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
