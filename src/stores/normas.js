import { observable, action, toJS, computed, runInAction } from 'mobx';
import axios from 'axios';
import post from 'models/post';

axios.defaults.headers.common.Authorization =
  'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWUyNDc4ZDJhODMzZjM5MTkwZWJjZDUiLCJpYXQiOjE1MDgxMTk2Mjd9.4hMoAvMXUR3rJS8L-l0M0TR36l5gh1GtKjEhNm_vqqA';

class Store {
  @observable newPost = post;
  @observable posts = [];
  @observable isLogged = true;

  @action
  handleChange(key, value) {
    this.newPost[key] = value;
  }

  @action
  clearPost() {
    this.newPost = post;
  }

  createPost() {
    console.log(toJS(this.newPost));
    return axios.post('http://192.168.0.103:3000/api/v1/posts/', toJS(this.newPost));
  }

  @action
  Login() {
    this.isLogged = !this.isLogged;
  }
}

export default new Store();
