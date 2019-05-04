import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao:{
        width:150,
        height:60,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius:30
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoText: {
        color:props.color,
        fontSize:15,
        fontWeight:'bold'
      }
    });
  }

  render() {
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
          <View style={this.styles.botaoArea}>
            <Text style={this.styles.botaoText}>Assemble</Text>
          </View>
      </TouchableOpacity>
    );
  }
}

export default class ProjetoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {v:'Capitão América'};

    this.a = ['Capitão América', 'Homem de Ferro', 'Thor', 'Hulk', 'Gavião Arqueiro', 'Viuva Negra'];


    this.mudarV = this.mudarV.bind(this);
  }

  mudarV() {
    let s = this.state;

    let r = Math.floor(Math.random() * this.a.length);

    s.v = this.a[r];

    this.setState(s);
  }


  render() {
    return ( 
      <View style={styles.body}> 
        <ImageBackground source={require('./images/foto.jpg')} style={styles.bgImage}>
            <View style={styles.areaCont}>
              <Text style={styles.title}>Qual Vingador Você Seria ?</Text>
              <Text style={styles.avenger}>{this.state.v}</Text>
              <Botao color='#A54B46' onPress={this.mudarV}/>
            </View>
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:20
  },
  bgImage:{
    flex:1,
    width:null
  },
  areaCont:{
    flex:1,
    alignItems:'center'
  },
  title:{
    fontSize:30,
    textAlign:'center',
    color:'#05ADB8',
    marginTop:50,
    fontWeight:'bold'
  },
  avenger:{
    fontSize:30,
    marginTop:150,
    marginBottom:130,
    color:'#FFFFFF',
  }
});
