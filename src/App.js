import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './helpers/Icons';

import registerScreen from './screens';

registerScreen();

function startApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'normas.Home',
        icon: iconsMap['ios-create-outline'],
        title: 'Home',
      },
      {
        screen: 'normas.Feed',
        icon: iconsMap['ios-list'],
        title: 'Propuestas',
      },
      {
        screen: 'normas.Profile',
        icon: iconsMap['ios-person'],
        title: 'Profile',
      },
    ],
    appStyle: {
      tabBarBackgroundColor: '#fff',
      tabBarButtonColor: '#bbbb',
      tabBarSelectedButtonColor: '#000',
      orientation: 'portrait',
      statusBarColor: '#000',
    },
  });
}

iconsLoaded.then(() => startApp());
