import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: colors.background3,
    marginBottom: 1,
  },
  top: {
    width: '100%',
    height: 100,
  },
  duogram: {
    marginTop: -61,
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: colors.backgroundLight,
    borderRadius: 100,
    ...center,
    elevation: 16,
  },
  initials: {
    ...fontFamily.light,
    fontSize: 30,
    color: colors.highlight,
  },
  wall: {
    flex: 1,
  },
  image: {
    marginTop: -61,
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: colors.backgroundLight,
    borderRadius: 100,
  },
  counter: {
    marginTop: -38,
    marginRight: -70,
    width: 40,
    height: 40,
    backgroundColor: colors.backgroundLight,
    borderWidth: 1,
    borderColor: colors.backgroundLight,
    borderRadius: 60,
    ...center,
    elevation: 16,
  },
  number: {
    ...fontFamily.medium,
    color: colors.heading1,
    fontSize: 16,
  },
  name: {
    ...fontFamily.medium,
    color: colors.heading1,
    fontSize: 14,
    paddingTop: 10,
  },
  job: {
    ...fontFamily.medium,
    color: colors.heading2,
    fontSize: 12,
  },
  history: {
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  separator: {
    ...fontFamily.medium,
    color: colors.heading1,
    fontSize: 14,
  },
});
