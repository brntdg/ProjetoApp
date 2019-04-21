import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

export default class ProjetoApp extends Component {  

  render() {
    return ( 
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>          

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi"/>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>Texto 1</Text>
          <Image style={styles.guri} source={ require('./images/mimimi.jpg') } />
          <Text style={[styles.texto, styles.texto2]}>Texto 2</Text>
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
    marginTop:-70,
    zIndex:0
  },
  texto:{
    fontSize:25,
    color:'#FFFFFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:70
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
});