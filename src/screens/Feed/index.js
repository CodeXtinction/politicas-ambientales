import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { View, FlatList, RefreshControl } from 'react-native';
import { screens } from 'utils/constants';

import Card from 'components/Card';
import ListHeader from 'components/ListHeader';
import EmptyList from './EmptyList';

import style from './style';

@inject('normas')
@observer
class Feed extends Component {
  constructor(props) {
    super(props);
    this.pushPost = this.pushPost.bind(this);
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

  render() {
    const { normas } = this.props;
    return (
      <View style={style.container}>
        <FlatList
          ListEmptyComponent={() => <EmptyList />}
          ListHeaderComponent={() => <ListHeader title="RECIENTES" />}
          data={normas.postDataSource}
          renderItem={({ item }) => <Card post={item} onPress={this.pushPost} />}
          keyExtractor={item => item._id}
          style={style.list}
          refreshControl={
            <RefreshControl refreshing={normas.refreshing} onRefresh={() => normas.getPosts()} />
          }
        />
      </View>
    );
  }
}

export default Feed;
