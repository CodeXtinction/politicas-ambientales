import { colors } from './theme';

export const screnOpts = {
  MAIN: {
    navBarTextColor: colors.heading3,
    navBarHideOnScroll: true,
    navBarBackgroundColor: colors.backgroundLight,
    navBarTextFontFamily: 'rubik_light',
    navBarTextFontSize: 16,
    // navBarHidden: true,
    // navBarHeight: 10,
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
  },
  CREATE: {
    navBarTextFontFamily: 'rubik_medium',
    navBarTextFontSize: 14,
    navBarTextColor: colors.heading1,
    navBarButtonColor: colors.heading1,
    navBarBackgroundColor: colors.backgroundLight,
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
  },
  COMPOSER: {
    navBarTextFontFamily: 'rubik_medium',
    navBarTextFontSize: 14,
    navBarTextColor: colors.heading1,
    navBarButtonColor: colors.heading1,
    navBarBackgroundColor: colors.backgroundLight,
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
  },
  ROOT: {
    navBarHidden: true,
  },
  LOGIN: {
    navBarHidden: true,
  },
};

export const screens = {
  ROOT: {
    screen: 'normas.Root',
  },
  MAIN: {
    screen: 'normas.Main',
    title: 'CREANDO REDES',
  },
  HOME: {
    screenId: 'normas.Home',
  },
  FEED: {
    screenId: 'normas.Feed',
  },
  PROFILE: {
    screenId: 'normas.Profile',
  },
  CREATE: {
    screen: 'normas.Create',
    title: 'NUEVA POLITICA',
  },
  COMPOSER: {
    screen: 'normas.Composer',
    title: 'YA CASI!',
  },
  LOGIN: {
    screen: 'normas.Login',
  },
};
