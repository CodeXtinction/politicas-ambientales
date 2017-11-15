import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableNativeFeedback, Linking } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';
import Feather from 'react-native-vector-icons/Feather';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 60,
  },
  label: {
    ...fontFamily.bold,
    fontSize: 14,
    color: colors.heading1,
    marginTop: 10,
  },
  subLabel: {
    ...fontFamily.medium,
    fontSize: 14,
    color: colors.heading3,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: colors.alert,
    borderRadius: 4,
  },
  text: {
    color: colors.highlight,
    ...fontFamily.bold,
    fontSize: 14,
  },
});

class About extends Component {
  visitGithub() {
    Linking.openURL('https://github.com/CodeXtinction/politicas-ambientales');
  }
  render() {
    return (
      <View style={style.container}>
        <Feather name="github" size={160} color={colors.heading3} />
        <Text style={style.label}>Creando Redes</Text>
        <Text style={style.subLabel}>Proyecto Practica III</Text>
        <TouchableNativeFeedback onPress={() => this.visitGithub()}>
          <View style={style.button}>
            <Text style={style.text}>Visitar Repositorio</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default About;
