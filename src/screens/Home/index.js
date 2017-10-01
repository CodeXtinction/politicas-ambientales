/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from 'utils/theme';

import FloatButton from 'components/FloatButton';

import style from './style';


class Home extends Component {
  constructor(props) {
    super(props);
    this.pushCreate = this.pushCreate.bind(this);
  }

  pushCreate() {
    this.props.navigator.push({
      screen: 'normas.Create',
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.main}>
          <View style={style.icon}>
            <Icon name="ios-leaf-outline" size={100} color={colors.heading2} />
          </View>
        </View>
        <View style={style.legend}>
          <Text style={style.title}>Nueva Política</Text>
          <Text style={style.subTitle}>Cuentanos tu manera de mejorar el medio ambiente</Text>
        </View>
        <FloatButton onPress={this.pushCreate} />
      </View>
    );
  }
}


export default Home;
