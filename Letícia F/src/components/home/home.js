// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={11} s={11}>
        <Card>
          <h5 class="titulo"><b>Flashcards</b></h5>
          <br/>
          <div>
            <p>O objetivo desse site é ajudar alunos de Ensino Médio em seus estudos, utilizando flashcards 
              para tornar esse aprendizado mais divertido e menos técnico, podendo ser visto como um tipo de 
              "jogo" por muitos, e assim, fazer com que os estudantes não se sintam estudando, mas aprendam 
              do mesmo jeito ou até melhor.
            </p>
            <br/>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;