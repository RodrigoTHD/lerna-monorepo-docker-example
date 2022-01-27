import './App.css';

import Pkg1 from 'package-1';
import Pkg2 from 'package-2';
import React from 'react';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <Pkg1 />
          <Pkg2 />
          <h1>front-end</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
