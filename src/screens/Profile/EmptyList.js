import React from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    padding: 30,
    ...center,
  },
  label: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading3,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.success,
    borderRadius: 4,
  },
  text: {
    color: colors.highlight,
    ...fontFamily.bold,
    fontSize: 14,
  },
});

function EmptyList({ onPress }) {
  return (
    <View style={style.container}>
      <Text style={style.label}>Aun no tienes politicas</Text>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Text style={style.text}>CREAR POLITICA</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default EmptyList;
