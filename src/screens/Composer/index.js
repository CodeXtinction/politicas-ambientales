import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, TextInput } from 'react-native';
import { screnOpts, screens } from 'utils/constants';
import { colors } from 'utils/theme';

import CreateButton from 'components/CreateButton';
import NextButton from 'components/NextButton';

import style from './style';

@inject('normas')
@observer
class Composer extends Component {
  static navigatorStyle = {
    ...screnOpts.COMPOSER,
  };
  constructor(props) {
    super(props);
    this.state = {
      heightDesc: 40,
      heightTitle: 40,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(key, value) {
    const { normas } = this.props;
    normas.handleChange(key, value);
  }

  submit() {
    const { normas } = this.props;
    normas.createPost().then((res) => {
      console.log(res);
    });
  }

  render() {
    const { newPost } = this.props.normas;
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            autoCapitalize="sentences"
            style={[style.title, { height: this.state.heightTitle }]}
            placeholder={'Titulo'}
            multiline
            underlineColorAndroid="transparent"
            onContentSizeChange={(event) => {
              this.setState({ heightTitle: event.nativeEvent.contentSize.height });
            }}
            onChangeText={val => this.handleChange('title', val)}
            value={newPost.title}
          />
          <TextInput
            style={[style.description, { height: this.state.height }]}
            placeholder={'Breve descripción de la politica'}
            multiline
            underlineColorAndroid="transparent"
            autoCapitalize="sentences"
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height });
            }}
            maxLength={400}
            onChangeText={val => this.handleChange('description', val)}
            value={newPost.description}
          />
        </View>
        <NextButton title="ENVIAR POLITICA" onPress={this.submit} />
      </View>
    );
  }
}

export default Composer;
