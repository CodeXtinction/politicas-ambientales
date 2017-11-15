import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  viewPager: {
    flex: 1,
  },
  legend: {
    paddingBottom: 40,
    justifyContent: 'center',
  },
  title: {
    ...fontFamily.bold,
    fontSize: 24,
    color: colors.main,
  },
  subTitle: {
    ...fontFamily.bold,
    fontSize: 24,
    color: colors.yellowBoom,
  },
  box: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },

  inputField: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,
    // borderWidth: 1,
    // borderColor: colors.borderSeparator,
    borderRadius: 4,
    marginBottom: 5,
    backgroundColor: colors.background,
  },
  icon: {
    width: 50,
    height: 50,
    ...center,
  },
  input: {
    flex: 1,
    ...fontFamily.bold,
    fontSize: 14,
  },
});
