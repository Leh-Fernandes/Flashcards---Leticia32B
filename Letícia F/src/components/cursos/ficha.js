import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import api from "../../service/api"

const Ficha = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const registro = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Row>
            <Input placeholder="Nome do curso" label="Nome"
            onChange={event => setName(event.target.value)} s={12} />
            <Input placeholder="Descrição" label="Descrição"
            onChange={event => setDescription(event.target.value)} s={12} />

            <Col s={12} m={12}>
                <NavLink to="/cursos" >
                    <Button onClick={registro} waves='light' className="right grey darken-2">Confirmar</Button>
                </NavLink>
            </Col>
        </Row>
    );
}

export default Ficha;