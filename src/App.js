import { Navigation } from 'react-native-navigation';
import Provider from 'helpers/mobxProvider';
import stores from 'stores';
import { iconsMap, iconsLoaded } from 'helpers/Icons';
import appStyle from 'utils/appStyle';
import { screens } from 'utils/constants';

import registerScreen from 'screens';

registerScreen(stores, Provider);

function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
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
          ...screens.PROFILE,
          icon: iconsMap['more-horizontal'],
        },
      ],
    },
    appStyle,
  });
}

iconsLoaded.then(() => startApp());
