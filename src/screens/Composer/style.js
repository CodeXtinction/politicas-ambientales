import { StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderColor: colors.borderSeparator,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    minHeight: 400,
  },
  title: {
    ...fontFamily.regular,
    fontSize: 20,
    color: colors.heading1,
  },
  description: {
    ...fontFamily.light,
    fontSize: 18,
    color: colors.heading1,
  },
});
