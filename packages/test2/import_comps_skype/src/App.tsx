//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from "../../../test1/skype_descomp1/src/Components/Sidebars";
import store from "../../../test1/skype_descomp1/src/Store/index";

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar></Sidebar>


      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
    </div>
  );
}

export default App;
