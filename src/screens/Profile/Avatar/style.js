import { StyleSheet } from 'react-native';
import { colors, center, fontFamily } from 'utils/theme';

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: colors.backgroundLight,
    margin: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  top: {
    width: '100%',
    height: 100,
  },
  duogram: {
    marginTop: -61,
    width: 120,
    height: 120,
    borderRadius: 100,
    ...center,
    borderWidth: 2,
    borderColor: colors.backgroundLight,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.borders,
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
    backgroundColor: colors.yellowBoom,
    borderRadius: 60,
    ...center,
    elevation: 8,
  },
  number: {
    ...fontFamily.medium,
    color: colors.highlight,
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
    alignItems: 'center',
    // paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  separator: {
    ...fontFamily.medium,
    color: colors.heading2,
    fontSize: 14,
  },
  icon: {
    paddingLeft: 20,
    height: 50,
    ...center,
  },
  logout: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    backgroundColor: colors.violet,
    ...center,
    marginTop: 10,
    borderRadius: 4,
  },
  logOutText: {
    color: colors.highlight,
    ...fontFamily.bold,
    fontSize: 12,
  },
});
