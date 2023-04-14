import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import UserProfile from './screens/UserPage';
import FrontScreen from './screens/FrontScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <>
    <SignUp></SignUp>
    {/* <LoginPage></LoginPage> */}
      {/* <FrontScreen></FrontScreen> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
