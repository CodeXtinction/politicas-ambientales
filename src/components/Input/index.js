import React from 'react';
import { View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';
import style from './style';

function Input({ icon, label, keyField, value, handleChange }) {
  const color = value ? colors.success : colors.heading3;
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Feather name={icon} size={24} color={color} />
      </View>
      <TextInput
        style={style.input}
        placeholder={label}
        underlineColorAndroid={colors.borders}
        placeholderTextColor={colors.heading3}
        onChangeText={val => handleChange(val, keyField)}
        value={value}
        autoCapitalize="words"
      />
    </View>
  );
}

export default Input;
