import React, { Component } from 'react';
import './Conversor.css';

export default class Conversor extends Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v5/convert?q=${de_para}&compact=y&apiKey=42683a3f504cd9a43607`;

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
            })
    }

 render(){
  return (
    <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB} </h2>
        <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}/>
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h2> {this.state.moedaB_valor} </h2>

    </div>
   );
 }
}