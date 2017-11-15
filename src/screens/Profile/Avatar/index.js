import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';

import style from './style';

function Avatar({ profile, postCount, onPress }) {
  return (
    <View style={style.container}>
      <View style={style.top} />
      <View style={style.duogram}>
        <Image resizeMode="cover" source={require('img/stock.png')} style={style.photo} />
      </View>
      <View style={style.counter}>
        <Text style={style.number}>{postCount}</Text>
      </View>
      <Text style={style.name}>{profile.name}</Text>
      <Text style={style.job}>{profile.job}</Text>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.logout}>
          <Text style={style.logOutText}>SALIR</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={style.history}>
        <View style={style.icon}>
          <Feather name="edit-2" color={colors.heading3} size={20} />
        </View>
        <Text style={style.separator}>{'  Mi actividad'}</Text>
      </View>
    </View>
  );
}

export default Avatar;
