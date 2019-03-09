import React, { PureComponent } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { ListItemSection } from './sections/list.item.section'

//import styles from './styles';

export class ListComponent extends PureComponent {

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return (
      <ListItemSection navigation={navigation}>
        {item.list}
      </ListItemSection>
    )
  }

  _keyExtractor(i, index) {
    return index.toString();
  }

  render() {
    const { lista, } = this.props
    return (
      <View>
        <FlatList
          data={lista}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}
