import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { center, colors } from 'utils/theme';

const style = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    ...center,
    backgroundColor: 'red',
  },
});

function LogOut() {
  return (
    <View style={style.container}>
      <Feather size={25} color="#fff" name="log-out" />
    </View>
  );
}

export default LogOut;
