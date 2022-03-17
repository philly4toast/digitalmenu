import React from 'react';
import RecipeList from './RecipeList';

// CAME WITH DEFAULT
import logo from './logo.svg';
import chickpigcow from './chickpigcow.png'
import './App.css';
// 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>BUCK OX TAVERN</h1>

        <img src={chickpigcow} className="App-logo" alt="logo" />
        
        <p>
          <RecipeList/>
        </p>

        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Terms
        </a>
        
      </header>
    </div>
  );
}

export default App;
