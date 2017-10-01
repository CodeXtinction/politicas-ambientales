/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import posts from 'data/post';
import Card from 'components/Card';
import ListHeader from 'components/ListHeader';

import style from './style';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.pushPost = this.pushPost.bind(this);
  }

  pushPost(post) {
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
  }

  render() {
    return (
      <View style={style.container}>
        <FlatList
          ListHeaderComponent={() => <ListHeader title="Recientes" />}
          data={posts}
          renderItem={({ item }) => <Card post={item} onPress={this.pushPost} />}
        />
      </View>
    );
  }
}

export default Feed;
