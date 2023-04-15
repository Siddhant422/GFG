import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function StoryBox() {
  return (
    <View style={styles.card}>
      <Card
        elevation={0}
        theme={{colors: {outline: 'black'}, roundness: 0}}
        style={{borderBottomColor: 'black', borderBottomWidth: 0.2}}>
        <Card.Title
          title="Saint Paul"
          //   subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          {/* <Text variant="titleMedium">Card Title</Text> */}
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Comment</Button>
          <Button>Like</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: '1.5%',
  },
});
