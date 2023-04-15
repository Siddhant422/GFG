import * as React from 'react';
import {BottomNavigation, Text,Provider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Image, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CustomItem from './CustomItem';
import MarketScreen from '../screens/MarketScreen';
import UserProfile from '../screens/UserPage';
const marketPlaceRoute = () => <MarketScreen></MarketScreen>;
const communityRoute = () => <HomeScreen></HomeScreen>;
const userprofile = () => <UserProfile></UserProfile>;
import Theme from '../assests/Theme/theme';
export default function BottomNavigator() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'community',
      title: 'Community',
      focusedIcon: 'account-group',
      unfocusedIcon: 'account-group-outline',
    },
    {
      key: 'marketPlace',
      title: 'MarketPlace',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
    },
    {
      key: 'UserPage',
      title: 'User Profile',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    marketPlace: marketPlaceRoute,
    community: communityRoute,
    UserPage: userprofile,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        theme={{colors: {secondaryContainer: '#0dbd71'}}}
        barStyle={{
          height: '10%',
          backgroundColor: '#EFFFF8',
        }}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
