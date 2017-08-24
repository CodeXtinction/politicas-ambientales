import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Avatar from './Avatar';

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

function NavBar({ post }) {
  return (
    <View style={s.container}>
      <Avatar post={post} />
    </View>
  );
}

export default NavBar;
