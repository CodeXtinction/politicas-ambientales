/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MainBtn from '../components/MainBtn';

import post from '../data/post';

class Home extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.pushCreate = this.pushCreate.bind(this);
  }

  pushCreate() {
    this.props.navigator.push({
      screen: 'normas.Create',
    });
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.logoWrapper}>
          <Image style={s.logo} source={require('../img/trees.png')} />
        </View>
        <View style={s.contentWrapper}>
          <Text style={s.text}>
            Cual es tu manera de contribuir al medio ambiente?, compartela!.
          </Text>
          <MainBtn onPress={this.pushCreate} />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff1',
  },
  logoWrapper: {
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    fontSize: 15,
    color: '#757575',
    fontFamily: 'rubik_medium',
  },
  contentWrapper: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
