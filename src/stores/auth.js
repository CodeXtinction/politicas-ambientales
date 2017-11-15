import { observable, action, toJS, computed, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';
import client from 'helpers/client';

class Auth {
  @observable isLogged = false;
  @observable profile = {};
  @observable isLoading = false;

  @action
  signIn(user) {
    this.showLoader();
    return client.post('users/signup', user);
  }

  @action
  login(user) {
    this.showLoader();
    return client.post('users/login', user);
  }

  @action
  saveLoggedUser(token, profile) {
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('profile', JSON.stringify(profile));
    client.defaults.headers.common.Authorization = token;
    this.isLogged = true;
    this.profile = profile;
  }

  @action
  async setCurrentUser() {
    try {
      const token = await AsyncStorage.getItem('token');
      const profile = await AsyncStorage.getItem('profile');
      if (token && profile) {
        runInAction(() => {
          client.defaults.headers.common.Authorization = token;
          this.isLogged = true;
          this.profile = JSON.parse(profile);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  showLoader() {
    this.isLoading = true;
  }
  @action
  hideLoader() {
    this.isLoading = false;
  }

  @action
  async logOut() {
    try {
      await AsyncStorage.removeItem('profile');
      await AsyncStorage.removeItem('token');
      this.isLogged = false;
      this.profile = {};
    } catch (error) {
      console.log('error');
    }
  }
}

export default new Auth();
