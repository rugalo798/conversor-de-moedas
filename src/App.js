import React, { Component } from "react";
import "./App.css";
import Conversor from "./components/Conversor.js";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Conversor de moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="USD" />
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="CAD" />
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="EUR" />
        </div>
      </div>
    );
  }
}

export default App;
