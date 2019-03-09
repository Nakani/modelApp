import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Card, CardItem, Body, Icon } from 'native-base';
import { Styles } from './cardDetail.style'
export class CardDetailComponent extends PureComponent {

  renderCardItemHeader() {
    return (
      <CardItem header>
        <View style={Styles.containerIcon}>
          <View style={Styles.contentIcon}>
            <Icon
              style={Styles.icon}
              name='phone'
              type="FontAwesome"
            />
            <Text
              style={Styles.labelIcon}
            >
              Ligar
              </Text>
          </View>
          <View style={Styles.contentIcon}>
            <Icon
              style={Styles.icon}
              name='diamond'
              type="FontAwesome"
            />
            <Text
              style={Styles.labelIcon}
            >
              Serviços
              </Text>
          </View>
          <View style={Styles.contentIcon}>
            <Icon
              style={Styles.icon}
              name='map-marker'
              type="FontAwesome"
            />
            <Text
              style={Styles.labelIcon}
            >
              Endereço
              </Text>
          </View>
          <View style={Styles.contentIcon}>
            <Icon
              style={Styles.icon}
              name='comments'
              type="FontAwesome"
            />
            <Text
              style={Styles.labelIcon}
            >
              Comentários
              </Text>
          </View>
          <View style={Styles.contentIcon}>
            <Icon
              style={Styles.icon}
              name='star'
              type="FontAwesome"
            />
            <Text
              style={Styles.labelIcon}
            >
              Favoritos
              </Text>
          </View>
        </View>
      </CardItem>
    )
  }

  renderCardItemBody(textDescription) {
    return (
      <CardItem>
        <Body>
          <View style={Styles.contentDescription}>
            <Text style={Styles.textDescription}>
              {textDescription}
            </Text>
          </View>
        </Body>
      </CardItem>
    )
  }

  render() {
    const { ...rest } = this.props
    return (
      <Card>
        {this.renderCardItemHeader()}
        {this.renderCardItemBody(rest.detail.texto)}
      </Card>
    )
  }
}
