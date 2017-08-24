import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Article({ title, description }) {
  return (
    <View style={s.container}>
      <Text style={s.title}>
        {title}
      </Text>
      <Text style={s.description}>
        {description}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 20,
  },
  title: {
    fontFamily: 'rubik_bold',
    fontSize: 25,
    color: '#000',
  },
  description: {
    fontFamily: 'rubik_regular',
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
  },
});

export default Article;
