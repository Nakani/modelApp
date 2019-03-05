import React, { PureComponent } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base'

export class HeaderComponent extends PureComponent {
  render() {
    const { routeName } = this.props.navigation.state
    return (
      <View style={{ flex: 1, }}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>{routeName}</Title>
            </Body>
            <Right />
          </Header>
        </Container>
      </View>
    )
  }

}
