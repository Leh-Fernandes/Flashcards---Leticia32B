// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row } from 'react-materialize';

import { NavLink} from 'react-router-dom'

import Card_reveal from "./card_reveal";


const Cursos = (props) => {
  return (
    <div>
      <Row>
          <div class="row">
            <h5>Cursos</h5>
            <NavLink to="/ficha">
              <a class="grey waves-effect waves-light btn">Adicionar curso</a>
            </NavLink>
          </div>
            {props.cursosData.map(curso => (
              <Card_reveal 
                titulo={curso.nome}
                descricao={curso.descricao} 
              />
            ))};
      </Row>
    </div>
  )
};

export default Cursos;