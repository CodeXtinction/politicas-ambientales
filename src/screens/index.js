import { Navigation } from 'react-native-navigation';
import { screens } from 'utils/constants';

import Main from './Main';
import Home from './Home';
import Feed from './Feed';
import Profile from './Profile';
import Create from './Create';
import Post from './Post';
import NavBar from '../components/NavBar';
import Composer from './Composer';
import Root from './Root';
import Login from './Login';

export default function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(screens.MAIN.screen, () => Main, store, Provider);
  Navigation.registerComponent(screens.HOME.screenId, () => Home, store, Provider);
  Navigation.registerComponent(screens.FEED.screenId, () => Feed, store, Provider);
  Navigation.registerComponent(screens.PROFILE.screenId, () => Profile, store, Provider);
  Navigation.registerComponent(screens.CREATE.screen, () => Create, store, Provider);
  Navigation.registerComponent(screens.COMPOSER.screen, () => Composer, store, Provider);
  Navigation.registerComponent(screens.ROOT.screen, () => Root, store, Provider);
  Navigation.registerComponent(screens.LOGIN.screen, () => Login, store, Provider);
  Navigation.registerComponent('normas.Post', () => Post);
  Navigation.registerComponent('normas.NavBar', () => NavBar);
}
