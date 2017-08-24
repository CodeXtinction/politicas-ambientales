/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Field from './Fields';
import Article from './Article';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <ScrollView style={s.container}>
        <View style={s.imageWrapper}>
          <Image style={s.image} source={{ uri: 'http://lorempixel.com/563/300/' }} />
        </View>
        <Article title={post.title} description={post.description} />
        <Field label="CUMPLE CON EL PRINCIPIO" field={post.proposito} />
        <Field label="CUMPLE CON EL INSTRUMENTO" field={post.intrumento} />
        <Field label="AUTOR" field={post.autor} />
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    alignSelf: 'stretch',
    height: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default Post;
