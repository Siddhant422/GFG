import * as React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Avatar, Button, Card, Text, View} from 'react-native-paper';
import {BackHandler, ScrollView, StyleSheet} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function MyComponent() {
  return (
    <Card style={styles.container}>
      <Card.Title
        title="Siddhant Keshari"
        variant="titleLarge"
        left={LeftContent}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'}>
        <TextInput
          placeholder=" What's Happening!!"
          autoFocus={true}
          style={styles.tweetArea}></TextInput>
      </ScrollView>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Post</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tweetArea: {
    marginBottom: 200,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
  },
});
