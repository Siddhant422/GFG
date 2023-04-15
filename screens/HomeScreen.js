import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import StoryBox from '../Component/StoryBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {AnimatedFAB, FAB, Portal, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

  const [extended, setExtended] = useState(true);

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setExtended(currentScrollPosition <= 0);
  };

  const handleClick = () => {
    navigation.navigate("AddStoryPage")
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
        <StoryBox></StoryBox>
        <StoryBox></StoryBox>
        <StoryBox></StoryBox>
        <StoryBox></StoryBox>
        <StoryBox></StoryBox>
        <StoryBox></StoryBox>
      </ScrollView>
      <AnimatedFAB
      color='white'
        icon={'plus'}
        label={'Tweet'}
        extended={extended}
        onPress={handleClick}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={[styles.fabStyle]}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    backgroundColor:'#0dbd71',
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
