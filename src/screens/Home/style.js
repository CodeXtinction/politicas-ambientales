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
  icon: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    borderWidth: 1,
    borderColor: colors.borders,
    ...center,
  },
  legend: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    ...fontFamily.bold,
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
