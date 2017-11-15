import { StyleSheet } from 'react-native';
import { center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 10,
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
