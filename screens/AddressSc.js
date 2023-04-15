import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [name2, setName2] = useState('');
  // const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate("BottomNavigator")
    // Write your sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Details-</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
        autoCorrect={false}
      />
            <TextInput
        style={styles.input}
        placeholder="Adress Line 2"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setName2(text)}
        value={name2}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Pin Code"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setEmail2(text)}
        value={email2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
       <TextInput
        style={styles.input}
        placeholder="State"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
      <View style={styles.rowstyle}>
        <View style={styles.boxstyle}>
      <TouchableOpacity style={styles.button1} onPress={handleSignUp}>
        <Text style={styles.buttonTitle1}>Back</Text>
      </TouchableOpacity></View>
      <View style={styles.boxstyle}>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonTitle}>Save</Text>
      </TouchableOpacity></View>
      </View>
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("LoginPage")}}>
          <Text style={styles.footerLink}>Log in</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  button1:{
    backgroundColor: '#F1FFF9',
    width: '50%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTitle1:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0dbd71',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
    textAlign: 'center',
  },
  rowstyle:{
    flexDirection:'row',
    padding:20,
    margine:20,
    rowGap:20,
  },
  boxstyle:{
    width:'78%',
    alignItems:'center'
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 16,
    width: '100%',
    fontSize: 16,
    color:'black'
  },
  button: {
    backgroundColor: '#0dbd71',
    width: '50%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  footerText: {
    color: '#333333',
    fontSize: 16,
  },
  footerLink: {
    color: '#FFCD61',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default SignUpPage;
