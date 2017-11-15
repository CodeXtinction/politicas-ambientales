import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, center, fontFamily } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 5,
    ...center,
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    ...center,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  text: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.highlight,
  },
});

function LoginButton({ title, onPress }) {
  return (
    <View style={style.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Text style={style.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default LoginButton;
