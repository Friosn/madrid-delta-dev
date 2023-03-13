import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
