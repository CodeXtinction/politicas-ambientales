import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, fontFamily } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  label: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading2,
  },
  field: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading3,
  },
});

function Field({ label, field }) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <Text style={style.field}>{field}</Text>
    </View>
  );
}

export default Field;
