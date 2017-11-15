import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';
import style from './style';

function FloatButton({ onPress }) {
  return (
    <View style={style.container}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#fafafa', true)}
      >
        <View style={style.icon}>
          <Feather name="edit-2" size={25} color={colors.highlight} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default FloatButton;
