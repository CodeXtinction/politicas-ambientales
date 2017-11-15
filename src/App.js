import { Navigation } from 'react-native-navigation';
import Provider from 'helpers/mobxProvider';
import stores from 'stores';
import { iconsLoaded } from 'helpers/Icons';
import appStyle from 'utils/appStyle';
import { screens } from 'utils/constants';
import registerScreen from 'screens';

stores.auth.setCurrentUser();

registerScreen(stores, Provider);

function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      ...screens.ROOT,
    },
    appStyle,
    animationType: 'fade',
  });
}

iconsLoaded.then(() => startApp());
