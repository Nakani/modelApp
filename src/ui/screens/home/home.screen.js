import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
} from 'native-base';
import { View, Text } from 'react-native'
import { maps } from './home.map'

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getLists(this.props.postsLimit, this.props.lastPost);
  }

  render() {
    const { lists } = this.props
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Content>

        </Content>
      </Container>
    );
  }
}

export const HomeScreenConnected = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(HomeScreen)
