import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    flex: 2,
    ...center,
  },
  image: {
    marginTop: 20,
    width: 160,
    height: 160,
  },
  legend: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    ...fontFamily.medium,
    color: colors.heading1,
    fontSize: 16,
  },
  subTitle: {
    ...fontFamily.regular,
    color: colors.heading2,
    fontSize: 14,
    maxWidth: '80%',
    textAlign: 'center',
    paddingTop: 5,
  },
});
