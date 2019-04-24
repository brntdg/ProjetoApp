import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

export default class ProjetoApp extends Component {  

  constructor(props) {
    super(props);
    this.state = {texto1:'', texto2:''}

    this.escrever = this.escrever.bind(this);

  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(à|á|â|ã)/g, 'i');
    novoTexto = novoTexto.replace(/(è|é|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(ì|í|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ò|ó|ô|õ)/g, 'i');
    novoTexto = novoTexto.replace(/(ù|ú|û|ü)/g, 'i');

    return novoTexto;
  }

  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);
  }



  render() {
    return ( 
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>          

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.escrever}/>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.guri} source={ require('./images/mimimi.jpg') } />
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#999999',
    paddingTop:30,
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  }, 
  titulo:{
    fontSize:30,
    color:'#FFFFFF'
  },
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    borderWidth:1,
    borderColor:'#999999',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:40,
    padding:10,
    margin:20
  },
  area:{
    height:300,
    width:300,
    marginTop:10
  },
  guri:{
    height:300,
    width:300,
    marginTop:-80,
    zIndex:0
  },
  texto:{
    fontSize:25,
    color:'#FFFFFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:80
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-80
  }
});