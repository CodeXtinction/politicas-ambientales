import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import iconCategory from 'helpers/iconCategory';
import { colors, center, fontFamily } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    padding: 40,
    ...center,
    backgroundColor: colors.yellowBoom,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  category: {
    padding: 5,
    backgroundColor: colors.alert,
    marginTop: 10,
    borderRadius: 4,
  },
  text: {
    ...fontFamily.bold,
    color: colors.highlight,
    fontSize: 12,
  },
  icon: {
    width: 90,
    height: 90,
  },
});

export function Category({ category }) {
  const name = category
    .toUpperCase()
    .split(' ')
    .join('');
  return (
    <View style={style.container}>
      <Image source={iconCategory[name]} style={style.icon} resizeMode="contain" />
      <View style={style.category}>
        <Text style={style.text}>{category.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default Category;
