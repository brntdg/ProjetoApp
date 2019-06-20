import React, { Component } from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class ProjetoApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			list:[
				{key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Jeferson Souza', msg:'Sai que horas ?'},
				{key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Bruno Santos', msg:'Não esquece a chave. Porque na semana passada você esqueceu do lado do sofá.'},
				{key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Mãe', msg:'Você não é todo mundo.'},
				{key:'4', img:'https://www.b7web.com.br/avatar3.png', nome:'Andresa Silva', msg:'Estou com fome.'},
				{key:'5', img:'https://www.b7web.com.br/avatar2.png', nome:'Leo Ciqueira', msg:'Vai jogar futebol hoje ?'},
				{key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Maedson Lopes', msg:'Ok! Boa Tarde.'},
			]
		};
	}

	render() {

		return (
			<View style={styles.body}>
				<FlatList 
					data={this.state.list} 
					renderItem={(item)=> <ListItem data={item} />} 
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		flex:1,
		marginTop:(Platform.OS=='ios') ? 20 : 20
	}
});