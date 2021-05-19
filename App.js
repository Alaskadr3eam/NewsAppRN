/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native'
import About from './components/About'
import Search from './components/Search'


function getHeaderTitle(route) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Search';

  switch (routeName) {
    case 'Search':
      return 'Choose subject';
    case 'About':
      return 'About';
  }
}

const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
} 

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <HomeTabs />
    </NavigationContainer>
    );
  }
}