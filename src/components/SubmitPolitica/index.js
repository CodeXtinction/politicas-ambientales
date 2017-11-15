import React from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

import style from './style';

function SubmitPolitica({ onPress }) {
  return (
    <View style={style.container}>
      <View style={style.button}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#eee', true)}
        >
          <View style={style.innerButton}>
            <Text style={style.text}>CREAR POLITICA</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

export default SubmitPolitica;
