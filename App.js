/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native'
import About from './components/About'
import Search from './components/Search'

const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
      }}
    >
      <Tab.Screen 
      name="Search" 
      component={Search} 
      
      />
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