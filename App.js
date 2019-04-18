import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native';

export default class ProjetoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {inputTexto:'' , texto:''}

    this.apertouBotao = this.apertouBotao.bind(this);
  }

  apertouBotao() {
    let s = this.state;
    
    if (s.inputTexto == 'Bruno') {
      s.texto = 'Você Acertou!';
    } else {
      s.texto = 'Você Errou!';
    }

    this.setState(s);
  }

  render() {

    return(
      <View style={{paddingTop:20}}>
        <TextInput style={styles.input} placeholder="Adivinhe meu nome..." onChangeText={(inputTexto) => this.setState({inputTexto})}/>


        <Button title="Aperte em mim." onPress={this.apertouBotao}/>

        <Text style={styles.texto}>{this.state.texto}</Text>


      </View>

      );


  }



}

const styles = StyleSheet.create({
  input: {
    height:40,
    borderWidth:1,
    borderColor:'#000000',
    padding:10,
    margin:10
  },

  texto:{
    fontSize:20,
    textAlign:'center'
  }
});