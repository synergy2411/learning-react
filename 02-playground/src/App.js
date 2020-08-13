import React from 'react';
import './App.css';
import MyComponent from './Components/ClassesBased';
import FunctionalCmp from './Components/FunctionBased';
import LifeCycleDemo from './LifeCycleDemo/LifeCycleDemo';

function App() {
  return (
    <div className="App">
      <h3>React Playground</h3>
      <hr />
      <LifeCycleDemo />
      <hr />
      <MyComponent />
      <FunctionalCmp />
    </div>
  );
}

export default App;
