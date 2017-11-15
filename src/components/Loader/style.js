import { StyleSheet } from 'react-native';
import { colors, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    ...center,
  },
  loader: {
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundLight,
    borderRadius: 3,
    ...center,
  },
  animation: {
    width: 100,
    height: 100,
  },
});
