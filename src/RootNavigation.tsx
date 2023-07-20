// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import NavigationService from './NavigationService';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}
      >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
