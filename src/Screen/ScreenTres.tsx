// ScreenOne.js
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


interface Props extends StackScreenProps<any,any>{}

export const ScreenTres = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
    <Image
    style={styles.image}
        source={{uri:'https://agenciadigitalamd.com/wp-content/uploads/2021/04/desarrollo-de-software-bogota-800x534-1.jpg'}}
      />
    </View>
  );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200, 
        height:200,
      },
   
  });