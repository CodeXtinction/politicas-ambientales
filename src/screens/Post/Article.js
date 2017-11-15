import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontFamily, colors, center } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  titleSection: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading2,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  description: {
    paddingHorizontal: 20,
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading3,
  },
});

function Article({ title, description }) {
  return (
    <View style={style.container}>
      <Text style={style.titleSection}>Descripcion</Text>
      <Text style={style.description}>{description}</Text>
    </View>
  );
}

export default Article;
