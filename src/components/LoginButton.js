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
  },
  text: {
    ...fontFamily.medium,
    fontSize: 14,
    color: colors.highlight,
  },
});

function LoginButton({ title }) {
  return (
    <View style={style.container}>
      <TouchableNativeFeedback onPress={() => null}>
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 0.7, y: 1.0 }}
          colors={['#3494E6', '#EC6EAD']}
          style={style.button}
        >
          <Text style={style.text}>{title}</Text>
        </LinearGradient>
      </TouchableNativeFeedback>
    </View>
  );
}

export default LoginButton;
