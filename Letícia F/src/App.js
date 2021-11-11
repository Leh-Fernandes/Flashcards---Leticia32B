// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'

import api from './service/api'

class App extends Component {
  constructor(props){
		super(props);

		this.state = {
			curso: [],
		}
	}

	async componentDidMount() {
		const response = await api.get();

		this.setState({ curso: response.data });
	}
  
  render() {
    const { curso } = this.state;
    return (
      <div>
        <Header />
        <Main cursosData={curso}/>
      </div>
    );
  }
}

export default App;