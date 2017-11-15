import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

function Legend({ title, subtitle }) {
  return (
    <View style={style.legend}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.subTitle}>{subtitle}</Text>
    </View>
  );
}

export default Legend;
