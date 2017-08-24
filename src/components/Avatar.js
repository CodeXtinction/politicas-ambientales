import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

function Avatar({ post }) {
  return (
    <View style={s.container}>
      <Image style={s.avatar} source={{ uri: 'http://lorempixel.com/200/200/' }} />
      <View style={s.info}>
        <Text style={s.autor}>
          {post.autor}
        </Text>
        <Text style={s.time}>
          {post.fecha}
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 2,
  },
  info: {
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
  },
  autor: {
    fontSize: 11,
    color: '#000',
  },
  time: {
    fontSize: 11,
  },
});

export default Avatar;
