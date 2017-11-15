import { StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.backgroundLight,
    marginBottom: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    padding: 4,
    backgroundColor: colors.alert,
    ...center,
    borderRadius: 2,
  },
  text: {
    color: colors.highlight,
    ...fontFamily.medium,
    fontSize: 9,
  },
  middle: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
    color: colors.heading2,
    ...fontFamily.medium,
    paddingBottom: 4,
  },
  description: {
    fontSize: 12,
    color: colors.heading3,
    ...fontFamily.regular,
  },
});
