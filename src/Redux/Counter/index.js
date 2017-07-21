/**
 * Created by Pedro Mazala on 20/07/2017.
 */
import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, View, Button, Title, CardItem} from 'native-base';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {increment, decrement} from './actions.js';

class Counter extends Component {
  render() {
    console.log(this.props.count);

    return (
      <Container>
        <Header>
          <Body>
          <Title>Redux Counter</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <View style={{flexDirection: 'row'}}>
            <Button success rounded onPress={() => this.props.increment()} style={{margin: 5}}>
              <Text>+</Text>
            </Button>
            <Button danger rounded onPress={() => this.props.decrement()} style={{margin: 5}}>
              <Text>-</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    increment: increment,
    decrement: decrement
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);