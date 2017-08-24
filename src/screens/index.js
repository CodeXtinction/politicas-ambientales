import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Feed from './Feed';
import Profile from './Profile';
import Create from './Create';
import Title from '../components/Title';
import Post from './Post';
import NavBar from '../components/NavBar';

export default function registerScreens() {
  Navigation.registerComponent('normas.Home', () => Home);
  Navigation.registerComponent('normas.Feed', () => Feed);
  Navigation.registerComponent('normas.Profile', () => Profile);
  Navigation.registerComponent('normas.Create', () => Create);
  Navigation.registerComponent('normas.Title', () => Title);
  Navigation.registerComponent('normas.Post', () => Post);
  Navigation.registerComponent('normas.NavBar', () => NavBar);
}
