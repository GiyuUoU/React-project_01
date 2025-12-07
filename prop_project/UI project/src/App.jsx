// src/App.jsx
import React from 'react';
import './App.css';

import { jobsData } from './data.js';
import Card from './components/Card.jsx';

function App() {
  return (
    <div id="parent">
      {jobsData.map((job, index) => (
        <Card key={index} {...job} />
      ))}
    </div>
  );
}

export default App;
