import { StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';


export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.backgroundLight,
    // borderBottomWidth: 1,
    // borderColor: colors.borderSeparator,
    marginBottom: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    padding: 4,
    backgroundColor: colors.primary2,
    ...center,
    borderRadius: 2,
  },
  text: {
    color: colors.highlight,
    ...fontFamily.bold,
    fontSize: 9,
  },
  middle: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
    color: colors.heading2,
    ...fontFamily.bold,
    paddingBottom: 4,
  },
  description: {
    fontSize: 12,
    color: colors.heading3,
    ...fontFamily.regular,
  },
});
