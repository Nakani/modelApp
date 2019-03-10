import React, { PureComponent } from 'react';
import MapView from 'react-native-maps'
import { View, Text } from 'react-native'
//import { Styles } from './maps.style'

export class MapsComponent extends PureComponent {

  render() {
    const { ...rest } = this.props

    return (
      <View>
        <MapView style={rest.style}
          loadingEnabled={true}
          initialRegion={{
            latitude: rest.latitude,
            longitude: rest.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: rest.latitude,
              longitude: rest.longitude,
            }}
          >
            <MapView.Callout>
              <Text>{rest.labelPin}</Text>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
      </View >
    )
  }
}

