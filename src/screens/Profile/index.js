/* eslint-disable react/prefer-stateless-function  */

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, FlatList } from 'react-native';
import Card from 'components/Card';
import { screens } from 'utils/constants';

import style from './style';
import Avatar from './Avatar';
import EmptyList from './EmptyList';

@inject('auth', 'normas')
@observer
class Profile extends Component {
  constructor(props) {
    super(props);
    this.pushPost = this.pushPost.bind(this);
    this.pushCreate = this.pushCreate.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  pushPost(post) {
    this.props.navigator.push({
      ...screens.POST,
      passProps: {
        post,
      },
      navigatorStyle: {
        navBarCustomView: 'normas.NavBar',
        navBarCustomViewInitialProps: {
          post,
        },
      },
    });
  }

  logOut() {
    const { auth, navigator } = this.props;
    auth.logOut();
    navigator.resetTo({
      ...screens.LOGIN,
    });
  }

  pushCreate() {
    this.props.navigator.push({
      ...screens.CREATE,
    });
  }

  render() {
    const { profile } = this.props.auth;
    const { normas } = this.props;
    const userPosts = normas.postDataSource.filter(post => post.user._id === profile._id);
    return (
      <View style={style.container}>
        <FlatList
          data={userPosts}
          ListEmptyComponent={() => <EmptyList onPress={this.pushCreate} />}
          ListHeaderComponent={() => (
            <Avatar profile={profile} postCount={userPosts.length} onPress={this.logOut} />
          )}
          renderItem={({ item }) => <Card post={item} onPress={this.pushPost} />}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

export default Profile;
