import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  body: {
    marginTop: -90,
    marginHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: colors.backgroundLight,
    // borderWidth: 1,
    // borderColor: colors.borders,
    elevation: 4,
  },
});
