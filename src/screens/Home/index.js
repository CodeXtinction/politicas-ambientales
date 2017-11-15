/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, StatusBar, Image } from 'react-native';
import FloatButton from 'components/FloatButton';
import { screens } from 'utils/constants';
import style from './style';

@inject('normas')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.pushCreate = this.pushCreate.bind(this);
  }

  componentDidMount() {
    // StatusBar.setBarStyle('dark-content');
    const { normas } = this.props;
    normas.getLocalPosts();
    normas.getPosts();
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
          <Image style={style.image} source={require('img/fog.png')} resizeMode="contain" />
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
