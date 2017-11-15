import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 130,
    paddingTop: 50,
    ...center,
  },
  title: {
    ...fontFamily.bold,
    fontSize: 24,
    textAlign: 'center',
    color: colors.highlight,
  },
});

function PostTitle({ title }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title.toUpperCase()}</Text>
    </View>
  );
}

export default PostTitle;
