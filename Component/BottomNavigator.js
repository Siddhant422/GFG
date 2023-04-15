import * as React from 'react';
import {BottomNavigation, Text,Provider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Image, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
const marketPlaceRoute = () => <Text>Music</Text>;
const communityRoute = () => <HomeScreen></HomeScreen>
import Theme from '../assests/Theme/theme'
export default function BottomNavigator() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'community',
      title: 'Community',
      focusedIcon: 'account-group',
      unfocusedIcon: 'account-group-outline',
      backgroundColor:'white'
    },
    {
    key: 'marketPlace',
      title: 'MarketPlace',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    marketPlace: marketPlaceRoute,
    community: communityRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
      theme={{colors: {secondaryContainer: '#0dbd71'}}}
      barStyle={{
        height: '10%',
        backgroundColor:'#EFFFF8'
      }}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
