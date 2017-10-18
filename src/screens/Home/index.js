/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'utils/theme';
import FloatButton from 'components/FloatButton';
import { screens } from 'utils/constants';
import style from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.pushCreate = this.pushCreate.bind(this);
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    // StatusBar.setHidden(true);
  }

  pushCreate() {
    this.props.navigator.push({
      ...screens.CREATE,
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.main}>
          <View style={style.icon}>
            <Feather name="sun" size={70} color={colors.primary2} />
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
