import { StyleSheet } from 'react-native';
import { colors } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderColor: colors.borderSeparator,
  },
  scroll: {
    flex: 1,
  },
  pickers: {
    backgroundColor: colors.backgroundLight,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 4,
    // elevation: 1,
  },
  info: {
    // marginHorizontal: 10,
    backgroundColor: colors.backgroundLight,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingLeft: 0,
    marginHorizontal: 10,
    paddingVertical: 20,
    // elevation: 1,
  },
});
