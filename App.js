import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Janta extends Component {

  constructor(props) {
    super(props);
    this.state = {comida: this.props.comida};
    let comidas = ['Arroz', 'Macarrão', 'Feijão', 'Alface', 'Pizza'];

    setInterval(() => {

      this.setState(previousState => {
        let n = Math.floor(Math.random() * comidas.length);

        return {comida: comidas[n] };

      });

    }, 1000);
  }

  render() {

    return (

      <View>
        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'red'}}>Hoje você vai jantar:</Text>
        <Text style={{textAlign:'center', fontSize:20}}>{this.state.comida}</Text>
      </View>

    );
  }
}

export default class ProjetoApp extends Component {    

  render() {

  

    return (

      <View style={{paddingTop:20}}>
        <Janta comida='Farinha'/>
      </View>

      );

  }

}

