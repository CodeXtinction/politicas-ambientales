import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Field({ label, field }) {
  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label}
      </Text>
      <Text style={s.field}>
        {field}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  label: {
    fontFamily: 'rubik_bold',
    fontSize: 13,
    color: '#000',
  },
  field: {
    fontFamily: 'rubik_regular',
    fontSize: 13,
    color: '#757575',
  },
});

export default Field;
