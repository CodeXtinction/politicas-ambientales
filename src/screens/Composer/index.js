import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, TextInput, ToastAndroid, ScrollView } from 'react-native';
import { screnOpts, screens } from 'utils/constants';
import { colors } from 'utils/theme';
import { iconsMap } from 'helpers/Icons';

import SubmitPolitica from 'components/SubmitPolitica';

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
    this.actionMessage = this.actionMessage.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  handleChange(key, value) {
    const { normas } = this.props;
    normas.handleChange(key, value);
  }

  actionMessage(message, alert) {
    const { navigator } = this.props;
    const color = alert ? colors.alert : colors.success;
    navigator.showSnackbar({
      text: message,
      textColor: '#fff',
      duration: 'long',
      backgroundColor: color,
    });
  }

  goToHome() {
    const { navigator } = this.props;
    navigator.resetTo({
      ...screens.MAIN,
      topTabs: [
        {
          ...screens.HOME,
          icon: iconsMap.home,
        },
        {
          ...screens.FEED,
          icon: iconsMap.zap,
        },
        {
          ...screens.PROFILE,
          icon: iconsMap.user,
        },
        {
          ...screens.ABOUT,
          icon: iconsMap['more-horizontal'],
        },
      ],
    });
  }

  submit() {
    const { normas } = this.props;
    const { newPost } = this.props.normas;
    const { description } = newPost;
    const isEmpty = newPost.title && newPost.description;
    const isShort = description.length > 100;

    if (!isEmpty) {
      this.actionMessage('Completa todos los campos', true);
      return;
    }

    if (!isShort) {
      this.actionMessage('Descripcion muy corta, minimo 100 palabras', true);
      return;
    }

    normas
      .createPost()
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          ToastAndroid.show('Politica creada!', ToastAndroid.LONG);
          this.goToHome();
        }
        normas.getPosts();
      })
      .catch((error) => {
        console.log(error);
        this.actionMessage('Ha ocurrido un error', true);
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
            placeholderTextColor={colors.heading3}
          />
          <View />
          <View>
            <ScrollView style={style.inputDescription}>
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
                placeholderTextColor={colors.heading3}
              />
            </ScrollView>
          </View>
        </View>
        <SubmitPolitica onPress={this.submit} />
      </View>
    );
  }
}

export default Composer;
