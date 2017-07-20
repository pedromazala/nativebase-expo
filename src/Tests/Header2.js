/**
 * Created by Pedro Mazala on 14/07/2017.
 */
import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,

  Item,
  Input
} from "native-base";

const styles = {
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  }
};

class Header2 extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#dc4239" }}
                androidStatusBarColor="#dc2015"
                iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back"  style={{color: "yellow"}}/>
            </Button>
          </Left>
          <Body>
          <Title style={{ color: "#FFF" }}>Title</Title>
          <Subtitle style={{ color: "#CCC" }}>Subtitle</Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="menu" style={{color: "white"}}/>
            </Button>
          </Right>

        </Header>

        <Content padder>
          <Text>
            Header with Icon Buttons
            <Icon
              name="logo-apple"
              style={{ width: 45, height: 45, justifyContent: "center", color: "gray" }}
            />
            <Icon
              name="logo-android"
              style={{ width: 45, height: 45, justifyContent: "center", color: "green" }}
            />
            {`\n`}
          </Text>

          <Item rounded>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}

export default Header2;