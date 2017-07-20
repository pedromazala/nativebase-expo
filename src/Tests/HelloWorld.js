/**
 * Created by Pedro Mazala on 11/07/2017.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Container, Button, Text} from 'native-base';
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Icon,
//   Left,
//   Right,
//   Body,
//   Text
// } from "native-base";

// import {Root} from "native-base";
// import {StackNavigator} from "react-navigation";

// export default class App extends Component {
//   // async componentWillMount() {
//   //   await
//   //     Expo.Font.loadAsync({
//   //       'Roboto': require('native-base/Fonts/Roboto.ttf'),
//   //       // 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//   //     });
//   // }
//
//   render() {
//     return (
//       <Root>
//         <Container>
//           <Header>
//             <Left>
//               <Button transparent onPress={() => this.props.navigation.goBack()}>
//                 <Icon name="arrow-back"/>
//               </Button>
//             </Left>
//             <Body>
//             <Title>Header</Title>
//             </Body>
//             <Right>
//               <Button transparent onPress={() => this.props.navigation.goBack()}>
//                 <Icon name="menu"/>
//               </Button>
//             </Right>
//
//           </Header>
//
//           <Content padder>
//             <Text>
//               Header with Icon Buttons
//             </Text>
//             <Button>
//               <Text>
//                 Button
//               </Text>
//             </Button>
//           </Content>
//         </Container>
//       </Root>
//     );
//   }
// }

// export default () => (
//   <Container>
//     <Button>
//       <Text>
//         Button
//       </Text>
//     </Button>
//   </Container>
// );

export default () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text style={styles.text}>Shake your phone to open the developer menu. Foi mesmo.</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff'
//   }
// });