import React, { PureComponent } from 'react';
import {
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
    const { headerName } = this.props
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{headerName}</Title>
        </Body>
        <Right />
      </Header>
    )
  }

}
