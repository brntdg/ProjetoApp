import React, { Component } from 'react';
import { View, StyleSheet, Platform, FlatList, ImageBackground } from 'react-native';
import MsgItem from './src/MsgItem';

export default class ProjetoApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chat:[
				{key:'1', nome:'Bruno', msg:'Oi', m:true},
				{key:'2', nome:'Jooh', msg:'Opa, tudo bem?', m:false},
				{key:'3', nome:'Jooh', msg:'Como tá a vida?', m:false},
				{key:'4', nome:'Bruno', msg:'Muito bem, graças a Deus. E você? eu soube que você tem um crush agora...', m:true},
				{key:'5', nome:'Jooh', msg:'Pois é. Quase Namorado já. kkk', m:false},
				{key:'6', nome:'Bruno', msg:'Maravilha! :)', m:true},
				{key:'7', nome:'Bruno', msg:'Agora tenho que ir. Beijo!', m:true},
				{key:'8', nome:'Jooh', msg:'Beijos!', m:false},
				{key:'9', nome:'Jooh', msg:'Até mais!', m:false},
			]
		};

	}

	render() {

		return (
			<View style={styles.body}>
				<ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
					<FlatList 
						data={this.state.chat}
						renderItem={({item})=> <MsgItem data={item} />}
					/>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		flex:1,
		marginTop:(Platform.OS=='ios') ? 20 : 20
	},
	chat:{
		flex:1
	}
});