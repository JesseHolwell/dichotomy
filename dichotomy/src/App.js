// src/App.js

import React from 'react';
import './App.css';
import CardComponent from './CardComponent';

function App() {
  return (
    <div className="App">
      <div className="Banner">

      <h1>Dichotomy</h1>
      <h3>Available soon</h3>
      <h2>Site under construction</h2>
      </div>

      <CardComponent />
    </div>
  );
}

export default App;