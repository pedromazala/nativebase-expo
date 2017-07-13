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
  Text,
  Thumbnail
} from 'native-base';

import getTheme from '../../native-base-theme/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      lading: false,
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

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content>
            <Header searchBar rounded>
              {/*<InputGroup>*/}
              <Icon name="ios-search"/>
              <Input placeholder="Search" value={this.state.search}
                     onChangeText={(text) => this.setState({search: text})} onSubmitEditing={() => this.search()}/>
              {/*</InputGroup>*/}
              <Button transparent onPress={() => this.search()}>
                <Text>Go</Text>
              </Button>
            </Header>
            {
              this.state.loading ?
                <Spinner /> :
                <List dataArray={this.state.results.items} renderRow={(item) =>
                  <ListItem button onPress={() => this.setModalVisible(true, item)}>
                    <Thumbnail square size={80} source={{uri: item.owner.avatar_url}}/>
                    <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.name}</Text></Text>
                    <Text style={{color: '#007594'}}>{item.full_name}</Text>
                    <Text note>Score: <Text note style={{marginTop: 5}}>{item.score}</Text></Text>
                  </ListItem>
                }/>
            }
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}