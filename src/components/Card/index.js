/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';

import Favorite from './Favorite';
import Header from './Header';

class Card extends Component {
  render() {
    const { post } = this.props;
    return (
      <TouchableNativeFeedback onPress={() => this.props.onPress(post)}>
        <View style={s.container}>
          <Header post={post} />
          <View style={s.middle}>
            <Text style={s.title} numberOfLines={2}>
              {post.title}
            </Text>
            <Text style={s.description} numberOfLines={2}>
              {post.description}
            </Text>
          </View>
          <View style={s.bottom}>
            <Favorite favorite={post.favorite} />
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    // paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 1,
  },
  middle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: '#607D8B',
    fontFamily: 'rubik_medium',
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#BDBDBD',
    fontFamily: 'rubik_regular',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
});

export default Card;
