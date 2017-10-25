import { StyleSheet } from 'react-native';
import { center, fontFamily, colors } from 'utils/theme';

export default StyleSheet.create({
  navBar: {
    height: 54,
    elevation: 3,
  },
  backButton: {
    width: 54,
    height: 54,
    ...center,
  },
  title: {
    flex: 1,
    height: 54,
    ...center,
  },
  text: {
    ...fontFamily.medium,
    color: colors.highlight,
    fontSize: 14,
  },
});
