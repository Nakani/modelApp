import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { HomeScreenConnected, InitialScreenConnected } from './ui/screens';
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
},
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  console.log(routeName)
  // switch (routeName) {
  //   case routeName === 'Home':
  //     console.log(routeName)
  //     iconName = 'ios-home' + focused ? '' : '-outline';
  //     break;
  //   case routeName === 'Lista':
  //     iconName = `ios-people${focused ? '' : '-outline'}`;
  //     break;
  // }
  if (routeName === 'Home') {
    iconName = 'robot'
    // We want to add badges to home tab icon
  } else if (routeName === 'Início') {
    iconName = 'list'

  }
  console.log(tintColor)
  return <Icon
    name={iconName}
    size={25}
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
      style: {
        backgroundColor: 'transparent'
        // position: "absolute"

      }
    },
  }
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#295BA7',
      inactiveTintColor: '#dddde1',
      labelStyle: {
        color: '#295ba7',
      },
    },
  },
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
