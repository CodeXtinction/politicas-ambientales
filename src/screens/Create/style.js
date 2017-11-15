import { StyleSheet } from 'react-native';
import { colors, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  pickers: {
    backgroundColor: colors.backgroundLight,
    paddingBottom: 25,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  info: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 10,
    paddingLeft: 0,
    marginHorizontal: 10,
    paddingBottom: 25,
  },
  sectionTitle: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.borders,
    marginBottom: 10,
    // backgroundColor: colors.background3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 14,
    color: colors.heading2,
    ...fontFamily.bold,
  },
});
