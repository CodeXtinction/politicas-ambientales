import { StyleSheet } from 'react-native';
import { center, colors, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    height: 100,
    ...center,
  },
  button: {
    elevation: 16,
    backgroundColor: colors.primary,
    borderRadius: 25,
  },
  innerButton: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    borderRadius: 25,
  },
  text: {
    color: colors.highlight,
    ...fontFamily.medium,
    fontSize: 14,
  },
});
