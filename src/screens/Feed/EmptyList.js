import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    paddingTop: 100,
    ...center,
  },
  label: {
    ...fontFamily.regular,
    fontSize: 14,
    color: colors.heading3,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
});

function EmptyList() {
  return (
    <View style={style.container}>
      <Image style={style.image} source={require('img/robot.png')} resizeMode="contain" />
      <Text style={style.label}>Ops nada por aqui!</Text>
    </View>
  );
}

export default EmptyList;
