import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { HomeScreenConnected, ListsScreen } from './ui/screens';
import { HeaderComponent } from './ui/components';
import { Platform } from 'react-native';

const navConfig = (navigation) => ({
  headerForceInset: {
    top: 'never',
  },
  headerTitle: <HeaderComponent navigation={navigation} />,
  headerLeft: null,
  headerStyle: {
    borderBottomWidth: 0,
    ...Platform.select({
      android: {
        //shadowColor: COLORS.$transparent,
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 0,
      },
    }),
  },
})

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreenConnected,
    navigationOptions: {
      header: null,
    },
  },
},
);

const ListsStack = createStackNavigator({
  Lists: {
    screen: ListsScreen,
    navigationOptions: {
      header: null,
    },
  },
},
);

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Lista: ListsStack,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log('aqui', routeName)
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Listas') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#295BA7',
      inactiveTintColor: '#dddde1',
      labelStyle: {
        color: '#295ba7',
      },
    },
  },
);

const AppStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: ({ navigation, }) => (navConfig(navigation))
  },
})

export const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  },
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
