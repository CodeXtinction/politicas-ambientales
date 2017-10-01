import React from 'react';
import { View, Image, Text } from 'react-native';
import style from './style';

function Avatar({ post }) {
  return (
    <View style={style.container}>
      <Image style={style.avatar} source={{ uri: 'http://lorempixel.com/200/200/' }} />
      <View style={style.info}>
        <Text style={style.autor}>
          {post.autor}
        </Text>
        <Text style={style.time}>
          {post.fecha}
        </Text>
      </View>
    </View>
  );
}

export default Avatar;
