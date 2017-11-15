import React, { Component } from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';

import style from './style';

class Loader extends Component {
  componentDidMount() {
    const { isVisible } = this.props;
    if (isVisible) {
      this.animation.play();
    }
  }
  render() {
    const { isVisible } = this.props;
    if (!isVisible) return null;
    return (
      <View style={style.container}>
        <View style={style.loader}>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={style.animation}
            source={require('animations/loading.json')}
            loop
          />
        </View>
      </View>
    );
  }
}

export default Loader;
