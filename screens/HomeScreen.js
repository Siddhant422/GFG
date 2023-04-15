import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import StoryBox from '../Component/StoryBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import AddStory from '../Component/AddStory';
import {AnimatedFAB, FAB, Portal, TextInput} from 'react-native-paper';

export default function HomeScreen() {
  const [extended, setExtended] = useState(true);

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setExtended(currentScrollPosition <= 0);
  };
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
        icon={'plus'}
        label={'Tweet'}
        extended={extended}
        onPress={() => console.log('Pressed')}
        visible={true}
        animateFrom={'right'}
        iconMode={'static'}
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
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
