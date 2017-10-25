import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import style from './style';

function GradientNavBar({ title }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 0.7, y: 1.0 }}
      colors={['#3494E6', '#EC6EAD']}
      style={style.navBar}
    >
      <View style={style.backButton}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </View>
      <View style={style.title}>
        <Text style={style.text}>{title}</Text>
      </View>
      <View style={style.backButton} />
    </LinearGradient>
  );
}

export default GradientNavBar;
