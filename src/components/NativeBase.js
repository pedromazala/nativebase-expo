/**
 * Created by Pedro Mazala on 13/07/2017.
 */
import React, {Component} from 'react';

import {
  StyleProvider,
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  Button,
  Spinner,
  List,
  ListItem,
  View,
  Text,
  Thumbnail,
  Card, CardItem, H3,
  Toast
} from 'native-base';

import getTheme from '../../native-base-theme/components';

import {StyleSheet, Modal, Platform} from 'react-native';

import material from '../../native-base-theme/variables/material';

const styles = {
  header: {
    marginLeft: -5,
    marginTop: 5,
    marginBottom: (Platform.OS === 'ios') ? -7 : 0,
    lineHeight: 24,
    color: '#5357b6'
  },
  modalImage: {
    resizeMode: 'contain',
    height: 200
  },
  bold: {
    fontWeight: '600'
  },
  negativeMargin: {
    marginBottom: -10
  }
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "dcomposer",
      lading: false,
      isReady: false,
      modalVisible: false,
      selectedItem: undefined,
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

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady: true});
    this.search();
  }

  setModalVisible(visible, x) {
    this.setState({
      modalVisible: visible,
      selectedItem: x
    });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Header searchBar rounded>
              <Item>
                <Icon active name="search"/>
                <Input placeholder="Search" value={this.state.search}
                       onChangeText={(text) => {
                         this.setState({search: text})
                       }} onSubmitEditing={() => this.search()}/>
                <Icon style={{color: "orange"}} name="pizza"/>
              </Item>
              <Button transparent onPress={() => this.search()}>
                <Text>Go!</Text>
              </Button>
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
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert("Modal has been closed.")
              }}
            >
              <Card style={{paddingTop: 20, marginTop: 40}}>
                {
                  !this.state.selectedItem ?
                    <View /> :
                    <View>
                      <CardItem>
                        <Thumbnail large circle style={{width: 200, height: 200}} source={{uri: this.state.selectedItem.owner.avatar_url}}/>
                      </CardItem>
                      <CardItem cardBody style={{justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{padding: 10}}>
                            <H3 style={styles.header}> {this.state.selectedItem.name}</H3>
                            <Text style={styles.negativeMargin}>
                              {`\n`}Type: <Text style={styles.bold}>{this.state.selectedItem.owner.type}</Text>
                            </Text>
                            <Text style={styles.negativeMargin}>
                              {`\n`}Stars: <Text style={styles.bold}>{this.state.selectedItem.stargazers_count}</Text>
                            </Text>
                            <Text style={styles.negativeMargin}>
                              {`\n`}Language: <Text style={styles.bold}>{this.state.selectedItem.language}</Text>
                            </Text>
                            <Text style={styles.negativeMargin}>
                              {`\n`}Open Issues: <Text
                              style={styles.bold}>{this.state.selectedItem.open_issues_count}</Text>
                            </Text>
                            <Text>
                              {`\n`}Last Update: <Text
                              style={styles.bold}>{this.state.selectedItem.updated_at.slice(0, 10)}{`\n`}</Text>
                            </Text>
                            {`\n`}
                          </Text>
                        </View>
                      </CardItem>
                      <CardItem>
                        <Button rounded primary style={{alignSelf: "flex-end"}} onPress={() => {
                          this.setModalVisible(!this.state.modalVisible, this.state.selectedItem)
                        }}>
                          <Icon name='arrow-back' />
                          <Text>Go Back</Text>
                        </Button>
                      </CardItem>
                    </View>
                }
              </Card>
            </Modal>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
