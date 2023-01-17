import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Primero Inicializo el state
  state={
    //En la variable name la declaro como un string vacío o como null
    name: "",
  };

  //Este es el evento que se va a encargar de ejecutar cada vez que se escriba algo en el input
  handlerOnChange = (e) => {
    //en value vamos a guardar lo que escribamos en el input
    const value = e.target.value;
    //con esto vamos a setear en name lo que está en value a name
    this.setState({
      name:value,
    });
  };
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handlerOnChange} />
        <p className="repeater">{this.state.name}</p>
      </div>
    );
  }
}

export default App;
