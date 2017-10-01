import { Navigation } from 'react-native-navigation';
import { screens } from 'utils/constants';

import Main from './Main';
import Home from './Home';
import Feed from './Feed';
import Profile from './Profile';
import Create from './Create';
import Post from './Post';
import NavBar from '../components/NavBar';

export default function registerScreens() {
  Navigation.registerComponent(screens.MAIN.screen, () => Main);
  Navigation.registerComponent(screens.HOME.screenId, () => Home);
  Navigation.registerComponent(screens.FEED.screenId, () => Feed);
  Navigation.registerComponent(screens.PROFILE.screenId, () => Profile);
  Navigation.registerComponent('normas.Create', () => Create);
  Navigation.registerComponent('normas.Post', () => Post);
  Navigation.registerComponent('normas.NavBar', () => NavBar);
}
