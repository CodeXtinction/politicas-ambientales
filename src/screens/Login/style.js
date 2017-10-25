import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  trademark: {
    flex: 2,
    alignSelf: 'stretch',
    paddingTop: 20,
    ...center,
  },
  logo: {
    width: 141,
    height: 92,
  },
  viewPager: {
    flex: 4,
  },
  box: {
    flex: 1,
    marginHorizontal: 40,
    paddingTop: 10,
  },
  inputField: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.borderSeparator,
    borderRadius: 2,
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
    ...center,
  },
  input: {
    flex: 1,
    ...fontFamily.regular,
    fontSize: 14,
  },
});
