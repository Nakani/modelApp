import React, { PureComponent } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Container } from 'native-base'
import { ListItemSection } from './sections/list.item.section'

//import styles from './styles';

export class ListComponent extends PureComponent {

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        //onPress={() => this.props.navigation.navigate('ListDetails', { item })}
        onPress={() => alert()}
      >
        <ListItemSection>
          {item.list}
        </ListItemSection>
      </TouchableOpacity>
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
