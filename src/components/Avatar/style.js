import { StyleSheet } from 'react-native';
import { colors, fontFamily } from 'utils/theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.borderSeparator,
  },
  info: {
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
  },
  autor: {
    ...fontFamily.bold,
    fontSize: 11,
    color: colors.heading1,
  },
  time: {
    ...fontFamily.regular,
    fontSize: 11,
    color: colors.heading2,
  },
});
