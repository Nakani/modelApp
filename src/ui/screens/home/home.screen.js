import React, { Component } from 'react';
import { connect } from 'react-redux';
import { maps } from './home.map';
import { View } from 'react-native';
import { ChatBotSection } from './section/bot/chatbot.section'

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getLists(this.props.postsLimit, this.props.lastPost);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ChatBotSection />
      </View>
    );
  }
}

export const HomeScreenConnected = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(HomeScreen)
