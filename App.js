import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class ProjetoApp extends Component {    

  render() {

  

    return (

      <View style={styles.padrao}>
        <Text style={styles.azulGrande}>Texto qualquer 1</Text>
        <Text style={styles.vermelho}>Texto qualquer 2</Text>
        <Text style={styles.verde}>Texto qualquer 3</Text>
        <Text style={[styles.verde, styles.azulGrande]}>Texto qualquer 4</Text>
      </View>

      );

  }

}

const styles = StyleSheet.create({
  azulGrande: {
    fontSize:30,
    color:'#0000FF',
    textAlign:'center'
  },
  vermelho: {
    fontSize:20,
    color:'#FF0000',
    textAlign:'right'
  },
  verde: {
    fontSize:40,
    color:'#00FF00'
  },
  padrao: {
    paddingTop: 20
  }
});