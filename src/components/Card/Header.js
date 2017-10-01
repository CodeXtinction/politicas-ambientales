import React from 'react';
import { View, Text } from 'react-native';

import Avatar from '../Avatar';
import style from './style';


function Header({ post }) {
  return (
    <View style={style.header}>
      <Avatar post={post} />
      <View style={style.tag}>
        <Text style={style.text}>
          {post.tipo.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

export default Header;
