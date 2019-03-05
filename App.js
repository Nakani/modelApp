import React from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import Store from './src/reduxAll/store'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reduxs/reducer-config'
import Store from './src/reduxs/store-config'
import AppContainer from './src/router'

export default class App extends React.Component {
  render() {
    //const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Provider store={Store}>
          <AppContainer />
        </Provider>
      </View>
    )
  }
}
