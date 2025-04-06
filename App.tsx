import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './ios/Components/Task'
// navigation
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens 
import Home from './ios/screens/Home'
import Details from './ios/screens/Details'

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home'
            component={Home}
            options = {{
              title: "Trending Products"
            }}
            />
            <Stack.Screen 
            name='Details'
            component={Details}
            options = {{
              productId: '54',
              title: "Product Details"
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
