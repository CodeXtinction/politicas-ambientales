import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from 'utils/theme';

import Avatar from './Avatar';

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
});

function NavBar({ post }) {
  return (
    <View style={s.container}>
      <Avatar post={post} color="#fff" />
    </View>
  );
}

export default NavBar;
