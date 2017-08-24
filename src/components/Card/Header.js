import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Avatar from '../Avatar';

function Header({ post }) {
  return (
    <View style={s.container}>
      <Avatar post={post} />
      <View style={s.tag}>
        <Text style={s.text}>
          {post.tipo.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  tag: {
    padding: 4,
    height: 20,
    backgroundColor: '#9C27B0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  text: {
    color: '#fff',
    fontFamily: 'rubik_bold',
    fontSize: 9,
  },
});

export default Header;
