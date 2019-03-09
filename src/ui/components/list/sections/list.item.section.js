import React, { Component } from 'react';
import { List, ListItem, Text, Button } from 'native-base'
import { Styles } from './list.section.style';

export class ListItemSection extends Component {

  callDetail() {

  }

  render() {
    const { children, navigation } = this.props
    return (
      <List>
        <ListItem>
          <Button
            style={{
              width: '100%',
            }}
            full
            transparent
            onPress={() => navigation.navigate('detail', { children })}
          >
            <Text
              style={Styles.labelButton}>
              {children}
            </Text>
          </Button>
        </ListItem>
      </List>
    )
  }
}
