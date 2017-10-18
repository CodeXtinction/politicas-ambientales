/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Card from 'components/Card';
import posts from 'data/post';

import style from './style';
import Avatar from './Avatar';

class Profile extends Component {
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
          ListHeaderComponent={() => <Avatar />}
          data={posts}
          renderItem={({ item }) => <Card post={item} onPress={this.pushPost} />}
        />
      </View>
    );
  }
}

export default Profile;
