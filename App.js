import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class ProjetoApp extends Component {    

  render() {

    let imagem = {uri:'https://vignette.wikia.nocookie.net/mensageiros/images/4/4b/Paisagem_imagem_linda_k.jpg/revision/latest?cb=20160225223314&path-prefix=pt-br'};

    return (

      <View>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text style={{fontSize:25, color:'red', margin:20}}>Olá Mundo</Text>

        <Image source={imagem} style={{width:300, height:300}}/>
      </View>

      );

  }

}

