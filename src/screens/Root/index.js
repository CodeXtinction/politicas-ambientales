import React, { Component } from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { screens, screnOpts } from 'utils/constants';
import { iconsMap } from 'helpers/Icons';
import Animation from 'lottie-react-native';

import style from './style';

@inject('auth')
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
    const { isLogged } = this.props.auth;
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
          ...screens.ABOUT,
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
    return (
      <View style={style.container}>
        <Animation
          ref={(animation) => {
            this.animation = animation;
          }}
          style={style.loader}
          source={require('animations/loading.json')}
          loop
        />
      </View>
    );
  }
}

export default Login;
