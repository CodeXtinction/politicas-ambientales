import React, { Component } from 'react';
import { View, StatusBar, Image, ViewPagerAndroid } from 'react-native';
import { screens, screnOpts } from 'utils/constants';
import LoginButton from 'components/LoginButton';
import NextButtom from 'components/NextButton';
import style from './style';

import Input from './Input';

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
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
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

  render() {
    const { login, signin } = this.state;
    return (
      <View style={style.container}>
        <View style={style.trademark}>
          <Image source={require('img/logo_black.png')} style={style.logo} resizeMode="contain" />
        </View>
        <ViewPagerAndroid
          style={style.viewPager}
          scrollEnabled={false}
          ref={(viewPager) => {
            this.viewPager = viewPager;
          }}
        >
          <View style={style.viewPager}>
            <View style={style.box}>
              <Input
                label="EMAIL"
                icon="mail"
                value={login.email}
                keyField="email"
                handleChange={this.handleLogin}
                keyboard="email-address"
              />
              <Input
                label="CONTRASEÑA"
                icon="lock"
                value={login.password}
                keyField="password"
                handleChange={this.handleLogin}
                secureTextEntry
              />
              <LoginButton title="ENTRAR" />
            </View>
            <NextButtom title="No tenes cuenta?" onPress={() => this.changePage(1)} />
          </View>
          <View style={style.viewPager}>
            <View style={[style.box, { paddingTop: 0 }]}>
              <Input
                label="NOMBRE"
                icon="user"
                value={signin.name}
                keyField="name"
                handleChange={this.handleSignin}
              />
              <Input
                label="OCUPACIÓN"
                icon="briefcase"
                value={signin.job}
                keyField="job"
                handleChange={this.handleSignin}
              />
              <Input
                label="EMAIL"
                icon="mail"
                value={signin.email}
                keyField="email"
                handleChange={this.handleSignin}
                keyboard="email-address"
              />
              <Input
                label="CONTRASEÑA"
                icon="lock"
                value={signin.password}
                keyField="password"
                handleChange={this.handleSignin}
                secureTextEntry
              />
              <LoginButton title="CREAR CUENTA" />
            </View>
            <NextButtom title="Ya tengo cuenta" isLeft onPress={() => this.changePage(0)} />
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

export default Login;
