import React from "react";

const Card_reveal = (props) => {
  return (
      <div class="col s4">  
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src= "https://materializecss.com/images/sample-1.jpg" />
          </div>
          <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{props.titulo}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">Clique aqui</a></p>
          </div>
          <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Descrição<i class="material-icons right">close</i></span>
          <p>{props.descricao}</p>
          </div>
        </div>
      </div>
  );
};

export default Card_reveal;