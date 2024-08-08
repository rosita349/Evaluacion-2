import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StartNavigator } from './src/Navegator/StackNavegator';


export default function App() {
  return (
    <NavigationContainer>
      <StartNavigator/>
    </NavigationContainer>
  );
}