import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-create-outline': [50, '#bbb'],
  'ios-list': [50, '#bbb'],
  'ios-person': [50, '#bbb'],
  'md-list': [50, '#bbb'],
  'ios-calendar': [30, '#bbb'],
  'md-flame': [30, '#bbb'],
  'logo-github': [30, '#bbb'],
  'logo-octocat': [30, '#bbb'],
  home: [22, '#bbb', Feather],
  user: [22, '#bbb', Feather],
  zap: [22, '#bbb', Feather],
  'more-horizontal': [22, '#bbb', Feather],
};

const defaultIconProvider = Ionicons;

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map((iconName) => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1],
      );
    }),
  ).then((sources) => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));
    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
