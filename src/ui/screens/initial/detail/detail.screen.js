import React, { Component } from 'react';
import { connect } from 'react-redux';
import { maps } from './detail.map'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

import {
  BaseComponent,
  CardDetailComponent,
  MapsComponent,
  CommentsComponent
} from '../../../components'
import { Styles } from './detail.style'
import { Image } from 'react-native';

export class DetailScreen extends Component {

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
    const { navigation } = this.props
    return (
      <CardDetailComponent
        detail={detail}
        navigation={navigation}
      />
    )
  }

  renderDetailMap(detail) {
    return (
      <View style={Styles.contentMaps}>
        <MapsComponent
          style={Styles.map}
          latitude={detail.latitude}
          longitude={detail.longitude}
          labelPin={detail.endereco}
        />
        <View style={Styles.contentEndereco}>
          <Text style={Styles.labelEndereco}>
            {detail.endereco}
          </Text>
        </View>
      </View>
    )
  }

  adjustmentArray(comentarios) {
    const commentsArray = []
    comentarios.map(comment => {
      commentsArray.push({
        comment
      })
    })
    return commentsArray
  }

  renderDetail(detail) {
    return (
      <View style={{ padding: 0 }}>
        {this.renderImage(detail.urlFoto)}
        <View style={Styles.contentTitle}>
          <Text
            style={Styles.textTitle}
          >
            {detail.titulo}
          </Text>
          <View style={Styles.iconContent}>
            <Icon
              style={Styles.icon}
              name='star'
              type="FontAwesome"
            />
          </View>
        </View>
        {this.renderCard(detail)}
        {this.renderDetailMap(detail)}
        <View>
          <Text
            style={Styles.textTitleComments}
          >Comentários
          </Text>
        </View>
        <CommentsComponent
          comments={this.adjustmentArray(detail.comentarios)}
        />
      </View>
    )
  }

  render() {
    const { navigation, detail } = this.props
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
