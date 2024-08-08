
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../Screen/ScreenOne';

import { ScreenTres } from '../Screen/ScreenTres';

import { Screentwo } from '../Screen/Screentwo';
import { ScreeCinco } from '../Screen/ScreeCinco';
import { ScreenCuatro } from '../Screen/ScreenCuatro';



const Stack = createStackNavigator();

export const StartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'pink' }, 
      }}
      initialRouteName="ScreenOne"
    >
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={Screentwo} /> 
      <Stack.Screen name="ScreenTres" component={ScreenTres} />
      <Stack.Screen name="ScreenCuatro" component={ScreenCuatro} />
      <Stack.Screen name="ScreeCinco" component={ScreeCinco} />


    </Stack.Navigator>
  );
};