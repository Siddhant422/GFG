import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <View style={styles.profile}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Siddhant Keshari</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>siddhantkeshari76@gmail.com</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>+91 8922915545</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfile;
