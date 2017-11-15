import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import style from './style';

function Avatar({ post, color }) {
  const name = post.user ? post.user.name : '';
  return (
    <View style={style.container}>
      <Image style={style.avatar} source={require('img/stock.png')} />
      <View style={style.info}>
        <Text style={[style.autor, { color }]}>{name}</Text>
        <Text style={[style.time, { color }]}>{moment(post.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}

export default Avatar;
