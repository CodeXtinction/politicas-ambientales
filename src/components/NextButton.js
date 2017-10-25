import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors, fontFamily, center } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
  },
  text: {
    ...fontFamily.medium,
    color: colors.primary2,
    fontSize: 14,
    paddingHorizontal: 5,
  },
});

function NextButton({ onPress, title, isLeft }) {
  return (
    <View style={[style.container, { alignItems: isLeft ? 'flex-start' : 'flex-end' }]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          {isLeft && <Feather name="arrow-left" size={24} color={colors.primary2} />}
          <Text style={style.text}>{title}</Text>
          {!isLeft && <Feather name="arrow-right" size={24} color={colors.primary2} />}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default NextButton;
