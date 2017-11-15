import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import style from './style';

function GradientNavBar({ title }) {
  return (
    <View style={style.navBar}>
      <View style={style.backButton}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </View>
    </View>
  );
}

export default GradientNavBar;
