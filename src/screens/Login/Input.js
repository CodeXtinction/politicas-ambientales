import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';

import style from './style';

const propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyField: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  keyboard: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

const defaultProps = {
  keyboard: 'default',
  secureTextEntry: false,
  value: '',
};

function Input({ icon, label, value, keyField, handleChange, keyboard, secureTextEntry }) {
  return (
    <View style={style.inputField}>
      <View style={style.icon}>
        <Feather name={icon} size={24} color={colors.heading3} />
      </View>
      <TextInput
        style={style.input}
        placeholder={label}
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.heading3}
        value={value}
        onChangeText={val => handleChange(val, keyField)}
        keyboardType={keyboard}
        secureTextEntry={secureTextEntry}
        returnKeyType="done"
      />
    </View>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
