import { observable, action, toJS, computed, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';
import client from 'helpers/client';
import post from 'models/post';

class Store {
  @observable newPost = post;
  @observable posts = [];
  @observable refreshing = false;

  @action
  handleChange(key, value) {
    this.newPost[key] = value;
  }

  @action
  clearPost() {
    this.newPost = post;
  }

  createPost() {
    return client.post('posts', toJS(this.newPost));
  }

  @action
  getPosts() {
    this.refreshing = true;
    return client
      .get('posts')
      .then((res) => {
        const posts = res.data;
        AsyncStorage.setItem('posts', JSON.stringify(posts));
        runInAction(() => {
          this.posts = posts;
          this.refreshing = false;
        });
      })
      .catch((e) => {
        runInAction(() => {
          this.refreshing = false;
        });
      });
  }

  @action
  getLocalPosts() {
    AsyncStorage.getItem('posts', (err, res) => {
      if (res) {
        this.posts = JSON.parse(res);
      }
    });
  }

  @computed
  get postDataSource() {
    return toJS(this.posts);
  }
}

export default new Store();
