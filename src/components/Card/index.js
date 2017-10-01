/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import style from './style';
import Header from './Header';

class Card extends Component {
  render() {
    const { post } = this.props;
    return (
      <TouchableNativeFeedback onPress={() => this.props.onPress(post)}>
        <View style={style.container}>
          <Header post={post} />
          <View style={style.middle}>
            <Text style={style.title} numberOfLines={2}>
              {post.title}
            </Text>
            <Text style={style.description} numberOfLines={2}>
              {post.description}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Card;
