import React, {Component} from 'react';
import Expo from "expo";

// import NbComponent from './src/components/HelloWorld';
// import NbComponent from './src/components/NativeBase';
// import NbComponent from './src/components/Header2';
// import NbComponent from './src/components/Modal';
import NbComponent from './src/Navigation/HomeScreen/index';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <NbComponent />;
  }
}