import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontFamily } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    ...fontFamily.medium,
    fontSize: 14,
    color: colors.heading2,
  },
});

function ListHeader({ title }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

export default ListHeader;
