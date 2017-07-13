/**
 * Created by Pedro Mazala on 13/07/2017.
 */
import React, {Component} from 'react';

import {
  StyleProvider,
  Container,
  Content,
  Header,
  InputGroup,
  Icon,
  Input,
  Button,
  Spinner,
  List,
  ListItem,
  View,
  Text,
  Thumbnail
} from 'native-base';

import getTheme from '../../native-base-theme/components';

import IconTest from 'react-native-vector-icons/Ionicons';
function getIconTest() {
  return (<IconTest name="ios-person" size={30} color="#4F8EF7"/>);
}
import {FontAwesome} from '@expo/vector-icons';
import {Image} from 'react-native';
import {Asset, Font} from 'expo';
function cacheAssetsAsync({images = [], fonts = []}) {
  return Promise.all([...cacheImages(images), ...cacheFonts(fonts)]);
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "dcomposer",
      lading: false,
      isReady: false,
      results: {
        items: []
      }
    }
  }

  search() {
    // Set loading to true when the search starts to display a Spinner
    this.setState({
      loading: true
    });

    let that = this;
    return fetch('https://api.github.com/search/repositories?q=' + this.state.search)
      .then((response) => response.json())
      .then((responseJson) => {
        // Store the results in the state variable results and set loading to
        // false to remove the spinner and display the list of repositories
        that.setState({
          results: responseJson,
          loading: false
        });
        return responseJson.Search;
      })
      .catch((error) => {
        that.setState({
          loading: false
        });
        console.error(error);
      });
  }

  componentWillMount() {
    this.setState({appIsReady: true});
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    // try {
    //   await cacheAssetsAsync({
    //     fonts: [
    //       FontAwesome.font,
    //       {'space-mono': require('native-base/Fonts/Roboto_medium.ttf')},
    //     ],
    //   });
    // } catch (e) {
    //   console.warn(
    //     'There was an error caching assets (see: main.js), perhaps due to a ' +
    //     'network timeout, so we skipped caching. Reload the app to try again.'
    //   );
    //   console.log(e.message);
    // } finally {
    //   this.setState({appIsReady: true});
    // }
  }

  render() {
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    // }

    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content>
            <Header searchBar rounded>
              {/*<InputGroup>*/}
              <Icon label="jobron" name="search"/>
              {/*{getIconTest()}*/}
              <Input placeholder="Search" value={this.state.search}
                     onChangeText={(text) => this.setState({search: text})} onSubmitEditing={() => this.search()}/>
              <Button onPress={() => this.search()}>
                <Text>Go</Text>
              </Button>
              {/*</InputGroup>*/}
            </Header>
            {
              this.state.loading ?
                <View>
                  <Spinner />
                </View> :
                <List dataArray={this.state.results.items} renderRow={(item) =>
                  <ListItem button onPress={() => this.setModalVisible(true, item)}>
                    <Thumbnail circle size={80} source={{uri: item.owner.avatar_url}}/>
                    <Text style={{padding: 10}}>
                      <Text>Name:
                        <Text style={{fontWeight: '600', backgroundColor: "yellow"}}> {item.name}</Text>
                      </Text>
                      <Text style={{color: '#007594'}}>{"\n"}{item.full_name}</Text>
                      <Text note>{"\n"}Score:
                        <Text note style={{marginTop: 5}}>{item.score}</Text>
                      </Text>
                    </Text>
                  </ListItem>
                }/>
            }
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}