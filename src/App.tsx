import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/screens/home/Home';
import { Router } from './components/ui/Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
