import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors, fontFamily, center } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    // backgroundColor: colors.backgroundLight,
    flexDirection: 'row',
    borderRadius: 2,
  },
  text: {
    ...fontFamily.bold,
    color: colors.primary2,
    fontSize: 14,
    paddingRight: 5,
  },
});

function NextButton({ onPress, title }) {
  return (
    <View style={style.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Text style={style.text}>{title}</Text>
          <Feather name="arrow-right" size={24} color={colors.primary2} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default NextButton;
