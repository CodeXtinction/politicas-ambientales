import React, { Component } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { screnOpts } from 'utils/constants';
import { colors } from 'utils/theme';
import style from './style';

import PostTitle from './PostTitle';
import Field from './Fields';
import Article from './Article';
import Category from './Category';

class Post extends Component {
  static navigatorStyle = {
    ...screnOpts.POST,
  };
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {
    const { post } = this.props;
    return (
      <ScrollView style={style.container}>
        <PostTitle title={post.title} />
        <View style={style.body}>
          <Category category={post.tipo} />
          <Article title={post.title} description={post.description} />
          <Field label="Autor" field={post.nombre} />
          <Field label="Cumple con el principio" field={post.principio} />
          <Field label="Cumple con el instrumento" field={post.instrumento} />
          <Field label="Institución" field={post.institucion} />
        </View>
      </ScrollView>
    );
  }
}

export default Post;
