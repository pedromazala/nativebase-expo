/**
 * Created by Pedro Mazala on 20/07/2017.
 */
import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';
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
          <Button dark bordered onPress={() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button dark bordered onPress={() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
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