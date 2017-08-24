import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Favorite({ favorite }) {
  return (
    <TouchableOpacity onPress={() => null}>
      <View style={s.container}>
        <Text style={s.text}>
          <Icon name="md-heart" size={20} color="#BDBDBD" />
          {` ${favorite}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'rubik_bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BDBDBD',
  },
});

export default Favorite;
