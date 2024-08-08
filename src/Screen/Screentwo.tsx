// ScreenOne.js
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


interface Props extends StackScreenProps<any,any>{}

export const Screentwo= ({navigation}:Props) => {
  return (
    <View style={styles.container}>
    <Image    style={styles.image}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpOY9ppHvRdk3CMjMkhAeUkPwNvh6bZVoHw&s' }}
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
        height:200
      },
   
  });