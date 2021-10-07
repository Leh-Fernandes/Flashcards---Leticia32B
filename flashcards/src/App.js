import React from 'react';
import './App.css';
import Cursos from './components/Cursos/index';
import Header from './components/Header';
import Home from './components/Home/index';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/> 
        <Cursos/>     
    </div>
  );
}

export default App;
