// ScreenOne.js
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';


interface Props extends StackScreenProps<any,any>{}

export const ScreenOne = ({navigation}:Props) => {
  return (
    <View>
      <Text>Bienvenido!!</Text>


    <TouchableOpacity
     onPress={() => navigation.navigate('ScreenTwo')}> 
      <Text style={styles.button}>imagen1</Text> 
      </TouchableOpacity>


      <TouchableOpacity
     onPress={() => navigation.navigate('ScreenTres')}> 
      <Text style={styles.button}>imagen2</Text> 
      </TouchableOpacity>

      <TouchableOpacity
     onPress={() => navigation.navigate('ScreenCuatro')}> 
      <Text style={styles.button}>Formulario1</Text> 
      </TouchableOpacity>


      <TouchableOpacity
     onPress={() => navigation.navigate('ScreenCinco')}> 
      <Text style={styles.button}>Formulario2</Text> 
      </TouchableOpacity>


    </View>
  );
};  

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#007bff', 
    padding: 10,
    borderRadius: 9,
    alignItems: 'center', 
    width:'30%',
    marginBottom: 20,
  }
});