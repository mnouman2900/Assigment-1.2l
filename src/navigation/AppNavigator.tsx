// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'; // <-- You need this
import { Profile } from '../components/ProfileCard';

export type RootStackParamList = {
  Home: undefined;
  Detail: { profile: Profile };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
