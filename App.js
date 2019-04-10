import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class ProjetoApp extends Component {

  somar(x,y) {
    return x + y;
  }

  

  render() {

    let nome = 'Bruno'

    return (

      <View>
        <Text style={styles.texto}>A soma de 2 + 2 é: {this.somar(2,2)}</Text>

        <Button title='Aperte' onPress={() => {
          alert('Apertou o botão!');
        }}/>
      </View>


      );

  }


}

const styles = StyleSheet.create({
    texto:{
        fontSize:30
    }

});