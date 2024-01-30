import { View, Text,Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Filter from './src/components/screens/Filter';
import AuthorDetails from './src/components/screens/AuthorDetails';
import Profile from './src/components/screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Filter" component={Filter} options={{headerShown: false}} />
        <Stack.Screen name="Detail Author" component={AuthorDetails} options={{headerShown: false}} />
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





