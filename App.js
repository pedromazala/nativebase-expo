import React, {Component} from 'react';
import Expo from "expo";

// import NbComponent from './src/Tests/HelloWorld';
// import NbComponent from './src/Tests/NativeBase';
// import NbComponent from './src/Tests/Header2';
// import NbComponent from './src/Tests/Modal';
// import NbComponent from './src/Navigation/HomeScreen/index';
// import NbComponent from './src/Redux/index';
import NbComponent from './src/Mobx/index';

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