import { StyleSheet } from 'react-native';
import { colors, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.highlight,
  },
  info: {
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
  },
  autor: {
    ...fontFamily.medium,
    fontSize: 11,
    color: colors.heading1,
  },
  time: {
    ...fontFamily.regular,
    fontSize: 11,
    color: colors.heading2,
  },
});
