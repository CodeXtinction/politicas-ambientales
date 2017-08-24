/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, InteractionManager } from 'react-native';

import posts from '../data/post';

import Card from '../components/Card';
import Title from '../components/Title';

class Feed extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.pushPost = this.pushPost.bind(this);
  }

  pushPost(post) {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigator.push({
        screen: 'normas.Post',
        passProps: {
          post,
        },
        navigatorStyle: {
          navBarBackgroundColor: '#fff',
          tabBarHidden: true,
          navBarHideOnScroll: true,
          navBarCustomView: 'normas.NavBar',
          navBarCustomViewInitialProps: {
            post,
          },
        },
      });
    });
  }

  render() {
    return (
      <View style={s.container}>
        <FlatList
          ListHeaderComponent={() => <Title />}
          data={posts}
          renderItem={({ item }) => <Card post={item} onPress={this.pushPost} />}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff1',
  },
});

export default Feed;
