import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Content } from 'native-base';
import { HeaderComponent } from '../header/header.component';

export class BaseComponent extends PureComponent {

  render() {
    const { children, ...rest } = this.props
    console.log(rest)
    return rest.headerDisplay ? (
      <Container>
        <HeaderComponent
          headerName={rest.headerName}
        />
        <Content>
          {children}
        </Content>
      </Container>
    ) : (
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
      )
  }
}
