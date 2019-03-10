import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import {
  HomeScreenConnected,
  InitialScreenConnected,
  DetailScreenConnected,
  ServicesScreen
}
  from './ui/screens';
import { HeaderComponent } from './ui/components';

const navConfig = (navigation) => (
  console.log(navigation.state.routeName),
  {
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
  }
},
);

const InitialStack = createStackNavigator({
  Início: {
    screen: InitialScreenConnected,
    navigationOptions: {
      header: null,
    },
  },
  detail: {
    screen: DetailScreenConnected,
    navigationOptions: {
      header: null,
    },
  },
  services: {
    screen: ServicesScreen,
    navigationOptions: {
      header: null,
    },
  },
},
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'robot'
    // We want to add badges to home tab icon
  } else if (routeName === 'Início') {
    iconName = 'list'
  }
  return <Icon
    name={iconName}
    size={25}
    color={tintColor}
    type="FontAwesome5"
  />;
};

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Início: InitialStack,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#e08c00',
      inactiveTintColor: 'gray',

    },
  },
);

const AppStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
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
