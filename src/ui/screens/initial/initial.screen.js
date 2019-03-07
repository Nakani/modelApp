import React, { Component } from 'react';
import { connect } from 'react-redux';
import { maps } from './initial.map'
import {
  Container,
  Content,
} from 'native-base';
import { ListComponent, BaseComponent } from '../../components'
import { Styles } from './initial.style'

export class InitialScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getLists(this.props.postsLimit, this.props.lastPost);
  }

  renderCard(lists) {
    const { navigation } = this.props
    return (
      <ListComponent
        lista={lists}
        navigation={navigation}
      />
    )
  }

  render() {
    const { lists, navigation } = this.props
    return (
      <BaseComponent
        headerName={'home'}
        style={{ backgroundColor: "#000" }}
        headerDisplay={true}
        headerName={navigation.state.routeName}
      >
        {this.renderCard(lists)}
      </BaseComponent>
    );
  }
}

export const InitialScreenConnected = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(InitialScreen)
