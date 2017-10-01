import { StyleSheet } from 'react-native';
import { colors, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.primary,
    ...center,
    elevation: 8,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.primary,
    ...center,
  },
});
