import { colors } from './theme';

export const screnOpts = {
  MAIN: {
    navBarTextColor: colors.highlight,
    navBarHideOnScroll: true,
    navBarBackgroundColor: colors.topTabs,
    navBarTextFontFamily: 'rubik_medium',
    navBarTextFontSize: 16,
    navBarHidden: false,
    // navBarHeight: 10,
    topBarElevationShadowEnabled: true,
    navBarTitleTextCentered: false,
    tabBarHidden: true,
  },
  CREATE: {
    navBarTextFontFamily: 'rubik_medium',
    navBarTextFontSize: 14,
    navBarTextColor: colors.highlight,
    navBarButtonColor: colors.highlight,
    navBarBackgroundColor: colors.topTabs,
    topBarElevationShadowEnabled: true,
    navBarTitleTextCentered: false,
    // navBarHideOnScroll: true,
    // tabBarHidden: true,
  },
  COMPOSER: {
    navBarButtonColor: colors.main,
    topBarElevationShadowEnabled: false,
    navBarBackgroundColor: colors.background,
  },
  ROOT: {
    navBarHidden: true,
    topBarElevationShadowEnabled: false,
  },
  LOGIN: {
    navBarHidden: true,
  },
  POST: {
    navBarBackgroundColor: colors.primary,
    navBarHideOnScroll: true,
    tabBarHidden: true,
    topBarElevationShadowEnabled: false,
    navBarButtonColor: colors.highlight,
  },
};

export const screens = {
  ROOT: {
    screen: 'normas.Root',
  },
  MAIN: {
    screen: 'normas.Main',
    title: 'Creando Redes',
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
  },
  LOGIN: {
    screen: 'normas.Login',
  },
  POST: {
    screen: 'normas.Post',
  },
  ABOUT: {
    screenId: 'normas.About',
  },
};
