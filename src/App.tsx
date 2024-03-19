import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path='/home' />
        <Route Component={Login} path='/login' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
