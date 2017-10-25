import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { screens, screnOpts } from 'utils/constants';
import { iconsMap } from 'helpers/Icons';
import Animation from 'lottie-react-native';

import style from './style';

@inject('normas')
@observer
class Login extends Component {
  static navigatorStyle = {
    ...screnOpts.ROOT,
  };

  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  componentDidMount() {
    const { isLogged } = this.props.normas;
    this.animation.play();
    setTimeout(() => {
      if (isLogged) {
        this.goToHome();
      } else {
        this.goToLogin();
      }
    }, 2000);
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
          ...screens.PROFILE,
          icon: iconsMap['more-horizontal'],
        },
      ],
    });
  }

  goToLogin() {
    const { navigator } = this.props;
    navigator.resetTo({
      ...screens.LOGIN,
    });
  }

  render() {
    const { isLogged } = this.props.normas;
    return (
      <View style={style.container}>
        <Animation
          ref={(animation) => {
            this.animation = animation;
          }}
          style={style.loader}
          source={require('animations/loader_3.json')}
          loop
        />
      </View>
    );
  }
}

export default Login;
