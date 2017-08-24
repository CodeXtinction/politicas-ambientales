/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default Profile;
