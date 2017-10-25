import { StyleSheet } from 'react-native';
import { colors, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...center,
    backgroundColor: colors.backgroundColor,
  },
  loader: {
    width: 200,
    height: 200,
  },
});
