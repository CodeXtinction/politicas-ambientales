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
    backgroundColor: colors.alert,
    ...center,
    elevation: 8,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    // borderWidth: 1,
    // borderColor: '#000',
    backgroundColor: colors.alert,
    ...center,
  },
});
