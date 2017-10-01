import { colors } from './theme';

export const screnOpts = {
  MAIN: {
    navBarTextColor: colors.heading1,
    navBarHideOnScroll: true,
    navBarBackgroundColor: colors.main,
    navBarTextFontFamily: 'lato_bold',
    navBarTextFontSize: 16,
  },
};

export const screens = {
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
};
