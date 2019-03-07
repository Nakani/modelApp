import React, { PureComponent } from 'react';
import { List, ListItem, Text } from 'native-base'

//import styles from './styles';

export class ListItemSection extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <List>
        <ListItem>
          <Text>{children}</Text>
        </ListItem>
      </List>
    )
  }
}
