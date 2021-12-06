import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeMain from './Screen/HomeMain';
import BookingForm from './Screen/BookingForm';
import WebPage from './Screen/WebPage';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeMain" component={HomeMain} options={{headerShown: false}}/>
        <Stack.Screen name="BookingForm" component={BookingForm} options={{headerShown: false}}/>
        <Stack.Screen name="WebPage" component={WebPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})