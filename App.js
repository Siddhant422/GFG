import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import UserProfile from './screens/UserPage';
import FrontScreen from './screens/FrontScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const Stack = createStackNavigator();
export default App;

const styles = StyleSheet.create({});
