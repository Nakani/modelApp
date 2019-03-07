import React, { Component } from 'react';
import { connect } from 'react-redux';
import { maps } from './home.map';
import { View } from 'react-native';
import { ChatBot } from './section/bot/chatbot.section'
import { ListComponent, BaseComponent } from '../../components'

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getLists(this.props.postsLimit, this.props.lastPost);
  }

  renderCard(lists) {
    return (
      <ListComponent
        lista={lists}
        navigation={this.props.navigation}
      />
    )
  }

  render() {
    const { lists, navigation } = this.props
    console.log(navigation.state.routeName)
    return (
      <View style={{ flex: 1 }}>
        <ChatBot />
      </View>
      // <BaseComponent
      //   headerName={'home'}
      //   style={{ backgroundColor: "#000" }}
      //   headerDisplay={false}
      //   headerName={navigation.state.routeName}
      // >
      // </BaseComponent>
    );
  }
}

export const HomeScreenConnected = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(HomeScreen)
