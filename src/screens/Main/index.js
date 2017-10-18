import React, { Component } from 'react';
import { View } from 'react-native';
import { screnOpts } from 'utils/constants';
import style from './style';

class Main extends Component {
  static navigatorStyle = {
    ...screnOpts.MAIN,
  };
  render() {
    return <View style={style.container} />;
  }
}

export default Main;
