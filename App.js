import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import UserProfile from './screens/UserPage';
import FrontScreen from './screens/FrontScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddStoryPage from './screens/AddStoryPage';

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const Stack = createStackNavigator();
export default App;

const styles = StyleSheet.create({});
