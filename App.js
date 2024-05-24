import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './ios/Components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <View style={styles.items}>
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    padding: 80
  },
});
