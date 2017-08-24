import React from 'react';
import { TouchableNativeFeedback, View, StyleSheet, Text } from 'react-native';

function MainBtn({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={s.container}>
        <Text style={s.text}>CREAR PROPUESTA</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#1DE9B6',
    borderRadius: 2,
  },
  text: {
    fontFamily: 'rubik_bold',
    color: '#fff',
  },
});

export default MainBtn;
