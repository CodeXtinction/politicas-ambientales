import { StyleSheet } from 'react-native';
import { colors, fontFamily, center } from 'utils/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    height: 50,
  },
  label: {
    flex: 3,
    ...fontFamily.regular,
    fontSize: 14,
    color: colors.heading3,
  },
  picker: {
    flex: 5,
    height: 40,
    backgroundColor: colors.background3,
    justifyContent: 'center',
    borderRadius: 4,
  },
  timeline: {
    width: 50,
    height: '100%',
    flexDirection: 'row',
    ...center,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: colors.borders,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginLeft: -8.5,
    borderWidth: 2,
    borderColor: colors.borders,
  },
});
