import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';

import style from './style';

function Avatar() {
  return (
    <View style={style.container}>
      <View style={style.top} />
      <LinearGradient
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 0.7, y: 1.0 }}
        colors={['#FF512F', '#DD2476']}
        style={style.duogram}
      >
        <Text style={style.initials}>JD</Text>
      </LinearGradient>
      <View style={style.counter}>
        <Text style={style.number}>5</Text>
      </View>
      <Text style={style.name}>Jane Doe</Text>
      <Text style={style.job}>Enginier</Text>
      <View style={style.history}>
        <Text style={style.separator}>
          <Feather name="edit-2" color={colors.heading3} size={20} />
          {'  Mi actividad'}
        </Text>
      </View>
    </View>
  );
}

export default Avatar;
