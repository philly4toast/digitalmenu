import React from 'react';
import RecipeList from './RecipeList';

// CAME WITH DEFAULT
import logo from './logo.svg';
import './App.css';
// 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          <RecipeList/>
          App Ideas:
            Animal Videos
            Recipe Lists
            FireArm Inventory Visualizer
            


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
