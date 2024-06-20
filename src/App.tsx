import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { MeusGastos } from './pages/MeusGastos';
import { Form } from './components/Form';
import { Formulario } from './pages/Formulario';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path='/home' />
        <Route Component={MeusGastos} path='/meusgastos' />
        <Route Component={Formulario} path='/formulario'/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
