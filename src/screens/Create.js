/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Create extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
  };
  render() {
    return (
      <View style={s.container}>
        <Text>NEW MODAL</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ebeff1',
  },
});

export default Create;
