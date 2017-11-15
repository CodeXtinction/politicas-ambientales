import React from 'react';
import { View, Text, Picker } from 'react-native';
import { colors } from 'utils/theme';
import style from './style';

function PickerField({ label, options, onValueChange, value, keyField }) {
  const color = value ? colors.success : colors.highlight;
  return (
    <View style={style.container}>
      <View style={style.timeline}>
        <View style={style.line} />
        <View style={[style.circle, { backgroundColor: color }]} />
      </View>
      <Text style={style.label}>{label}</Text>
      <View style={style.picker}>
        <Picker
          mode="dropdown"
          prompt={label}
          selectedValue={value}
          onValueChange={val => onValueChange(val, keyField)}
        >
          <Picker.Item label="" value="" />
          {options.map(({ key, name }) => (
            <Picker.Item key={key} label={name} value={name} color={colors.heading1} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

export default PickerField;
