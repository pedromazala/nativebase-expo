import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, View, Button, Title, CardItem} from 'native-base';

import CounterStore from './Stores/counter';

import {observer} from 'mobx-react';

// let counterStore = new CounterStore();

@observer
export default class extends Component {

  constructor() {
    super();

    this.counterStore = new CounterStore();
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
          <Title>Mobx Counter</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.counterStore.count}
              </Text>
            </CardItem>
          </Card>
          <View style={{flexDirection: 'row'}}>
            <Button success rounded onPress={() => this.counterStore.increment()} style={{margin: 5}}>
              <Text>+</Text>
            </Button>
            <Button danger rounded onPress={() => this.counterStore.decrement()} style={{margin: 5}}>
              <Text>-</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}