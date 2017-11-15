import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors, fontFamily } from 'utils/theme';
import PropTypes from 'prop-types';

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
    ...fontFamily.bold,
    color: colors.highlight,
    fontSize: 14,
    paddingHorizontal: 5,
  },
});

const propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isLeft: PropTypes.bool,
  color: PropTypes.string,
};

const defaultProps = {
  isLeft: false,
  color: colors.highlight,
};

function NextButton({ onPress, title, isLeft, color }) {
  const iconColor = color === colors.highlight ? colors.highlight : color;
  return (
    <View style={[style.container, { alignItems: isLeft ? 'flex-start' : 'flex-end' }]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          {isLeft && <Feather name="arrow-left" size={24} color={iconColor} />}
          <Text style={[style.text, { color }]}>{title}</Text>
          {!isLeft && <Feather name="arrow-right" size={24} color={iconColor} />}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

NextButton.propTypes = propTypes;
NextButton.defaultProps = defaultProps;

export default NextButton;
