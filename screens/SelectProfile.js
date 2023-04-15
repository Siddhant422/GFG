import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, Title} from 'react-native-paper';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

export default function SelectProfile({navigation}) {
  const {height, width} = useWindowDimensions();
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [genderIndex, setGenderIndex] = useState('');

  const genderCard = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Card
            onPress={() => {
              setGenderIndex(0);
            }}
            style={{
              borderRadius: 15,
              width: width * 0.4,
              height: height * 0.27,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assests/Image/Buyer.png')}
                resizeMode={'contain'}
                style={{
                  height: height * 0.11,
                  width: width * 0.7,
                  marginTop: 40,
                }}
              />
              <Text
                style={{paddingTop: '10%', fontWeight: '600', fontSize: 16}}>
                BUYER
              </Text>
            </View>
          </Card>
          <Card
            style={{
              borderRadius: 15,
              width: width * 0.4,
              height: height * 0.27,
            }}
            onPress={() => {
              setGenderIndex(1);
            }}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assests/Image/Seller.png')}
                resizeMode={'contain'}
                style={{
                  height: height * 0.11,
                  width: width * 0.7,
                  marginTop: 40,
                }}
              />
              <Text
                style={{paddingTop: '10%', fontWeight: '600', fontSize: 16}}>
                SELLER
              </Text>
            </View>
          </Card>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{paddingHorizontal: '5%', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            marginTop: '8%',
            marginLeft: '2%',
            marginBottom: '5%',
          }}>
          Who are you?
        </Text>
        {genderCard()}
        <Button mode="contained" style={styles.SubmitBtn} onPress={() => navigation.navigate("AddressSc")}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SubmitBtn: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#0dbd71',
    textAlign: 'center',
    fontColor: 'white',
  },
});
