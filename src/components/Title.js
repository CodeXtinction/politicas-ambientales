import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Title() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Recientes</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'rubik_bold',
    fontSize: 30,
    color: '#263238',
  },
});

export default Title;
