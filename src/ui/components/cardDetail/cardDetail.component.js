import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform, Alert } from 'react-native';
import { Card, CardItem, Body, Icon, Button } from 'native-base';
import { Styles } from './cardDetail.style'
export class CardDetailComponent extends PureComponent {

  callNumber(phone) {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Aviso!', 'Número Inválido');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };


  renderCardItemHeader(phone) {
    return (
      <CardItem header>
        <View style={Styles.containerIcon}>
          <View style={Styles.contentIcon}>
            <TouchableOpacity
              onPress={() => this.callNumber(phone)}
              transparent>
              <Icon
                style={Styles.icon}
                name='phone'
                type="FontAwesome"
              />
            </TouchableOpacity>
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
        {this.renderCardItemHeader(rest.detail.telefone)}
        {this.renderCardItemBody(rest.detail.texto)}
      </Card>
    )
  }
}
