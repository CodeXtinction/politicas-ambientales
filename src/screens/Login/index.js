import React, { Component } from 'react';
import { View, StatusBar, ViewPagerAndroid, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { observer, inject } from 'mobx-react/native';
import { screens, screnOpts } from 'utils/constants';
import { colors } from 'utils/theme';
import { iconsMap } from 'helpers/Icons';
import LoginButton from 'components/LoginButton';
import NextButtom from 'components/NextButton';
import style from './style';

import Input from './Input';
import Legend from './Legend';

@inject('auth')
@observer
class Login extends Component {
  static navigatorStyle = {
    ...screnOpts.LOGIN,
  };

  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: '',
        password: '',
      },
      signin: {
        name: '',
        email: '',
        password: '',
        job: '',
      },
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.signIn = this.signIn.bind(this);
    this.login = this.login.bind(this);
    this.actionMessage = this.actionMessage.bind(this);
  }

  changePage(page) {
    this.viewPager.setPage(page);
  }

  handleLogin(value, keyField) {
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [keyField]: value,
      },
    }));
  }

  handleSignin(value, keyField) {
    this.setState(prevState => ({
      signin: {
        ...prevState.signin,
        [keyField]: value,
      },
    }));
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

  signIn() {
    const { auth } = this.props;
    const { name, email, password } = this.state.signin;
    const isEmpty = name && email && password;
    if (!isEmpty) {
      this.actionMessage('Ingresa tus datos', true);
      return;
    }
    auth
      .signIn(this.state.signin)
      .then((res) => {
        if (res.status === 201) {
          this.actionMessage('ya puedes ingresar a tu cuenta!', false);
          this.changePage(0);
          this.setState({
            signin: {
              name: '',
              email: '',
              password: '',
              job: '',
            },
          });
        }
      })
      .catch((e) => {
        this.actionMessage('Revisa tus datos', true);
      });
  }

  login() {
    const { auth } = this.props;
    const { email, password } = this.state.login;
    const isEmpty = email && password;
    if (!isEmpty) {
      this.actionMessage('Ingresa tus datos', true);
      return;
    }
    auth
      .login(this.state.login)
      .then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          const profile = {
            name: res.data.name,
            job: res.data.job,
            _id: res.data._id,
          };
          auth.saveLoggedUser(token, profile);
          this.goToHome();
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          this.actionMessage('Cuenta no valida', true);
        } else {
          this.actionMessage('Ha ocurrido un error', true);
        }
      });
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

  render() {
    const { login, signin } = this.state;
    const { isLoading } = this.props.auth;
    return (
      <View style={style.container}>
        <ViewPagerAndroid
          style={style.viewPager}
          ref={(viewPager) => {
            this.viewPager = viewPager;
          }}
        >
          <View style={style.viewPager}>
            <View style={style.box}>
              <Legend title="Bienvenido!" subtitle="Ingresa a tu cuenta" />
              <Input
                label="Mail"
                icon="mail"
                value={login.email}
                keyField="email"
                handleChange={this.handleLogin}
                keyboard="email-address"
              />
              <Input
                label="Contraseña"
                icon="lock"
                value={login.password}
                keyField="password"
                handleChange={this.handleLogin}
                secureTextEntry
              />
              <LoginButton title="ENTRAR" onPress={this.login} />
            </View>
            <NextButtom
              title="No tenes cuenta?"
              onPress={() => this.changePage(1)}
              color={colors.heading2}
            />
          </View>
          <View style={style.viewPager}>
            <View style={style.box}>
              <Legend title="Unete ahora" subtitle="Es gratis!" />
              <Input
                label="Nombre completo"
                icon="user"
                value={signin.name}
                keyField="name"
                handleChange={this.handleSignin}
                autoCapitalize="words"
              />
              <Input
                label="Ocupación"
                icon="briefcase"
                value={signin.job}
                keyField="job"
                handleChange={this.handleSignin}
                autoCapitalize="words"
              />
              <Input
                label="Mail"
                icon="mail"
                value={signin.email}
                keyField="email"
                handleChange={this.handleSignin}
                keyboard="email-address"
              />
              <Input
                label="Contraseña"
                icon="lock"
                value={signin.password}
                keyField="password"
                handleChange={this.handleSignin}
                secureTextEntry
              />
              <LoginButton title="CREAR CUENTA" onPress={this.signIn} />
            </View>
            <NextButtom
              title="Ya tengo cuenta"
              isLeft
              onPress={() => this.changePage(0)}
              color={colors.heading2}
            />
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

export default Login;
