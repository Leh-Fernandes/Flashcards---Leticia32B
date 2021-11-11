import React from "react";
import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Ficha from './components/cursos/ficha'
import { Container } from 'react-materialize';
import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route path='/cursos' element={ <Cursos cursosData={props.cursosData}/> }/>
        <Route path='/ficha' element={ <Ficha /> }/>
      </Routes>
    </Container>
  </main>  
);

export default Main;