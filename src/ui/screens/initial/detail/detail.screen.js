import React, { Component } from 'react';
import { connect } from 'react-redux';
import { maps } from './detail.map'
import MapView from 'react-native-maps'
import { View, Text } from 'react-native'
import {
  BaseComponent,
  CardDetailComponent
} from '../../../components'
import { Styles } from './detail.style'
import { Image } from 'react-native';

export class DetailScreen extends Component {
  constructor(props) {
    super(props);
    // this.onPress = this.onPress.bind(this)
  }

  async componentDidMount() {
    const { navigation } = this.props
    await this.props.getListDetail(navigation.state.params.children);
  }

  renderImage(url) {
    return (
      <Image source={{ uri: url }} style={{ height: 200, width: null, flex: 1 }} />
    )
  }

  renderCard(detail) {
    console.log(detail)
    return (
      <CardDetailComponent detail={detail} />
    )
  }

  renderDetail(detail) {
    const { navigation } = this.props

    return (
      <View style={{ padding: 0 }}>
        {this.renderImage(detail.urlFoto)}
        <View>
          <Text
            style={Styles.textTitle}
          >{detail.titulo}</Text>
        </View>
        {this.renderCard(detail)}
        <MapView style={Styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }

  render() {
    const { navigation, detail } = this.props
    console.log(detail)

    return detail != null ? (
      <BaseComponent
        headerName={'home'}
        headerStyle={{ backgroundColor: "#E08C00" }}
        headerDisplay={true}
        headerName={detail.cidade + ' - ' + detail.bairro}
        goback={true}
        navigation={navigation}
      >
        {this.renderDetail(detail)}
      </BaseComponent>
    ) : null
  }
}

export const DetailScreenConnected = connect(
  maps.mapStateToProps,
  maps.mapDispatchToProps,
)(DetailScreen)
