import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

function FloatButton({ onPress }) {
  return (
    <View style={style.container}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#fafafa', true)}
      >
        <View style={style.icon}>
          <Icon name="md-add" size={24} color="#fff" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default FloatButton;
