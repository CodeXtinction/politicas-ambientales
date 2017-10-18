import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';

function CreateButton({ onPress }) {
  return (
    <View style={style.container}>
      <View style={style.button}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#fafafa', true)}
        >
          <View style={style.icon}>
            <Feather name="check" size={24} color="#fff" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

export default CreateButton;
