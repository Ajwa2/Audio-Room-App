import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export const HomeScreen = ({ goToCallScreen }) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity onPress={goToCallScreen} style={styles.nextContainer}>
            <Text style={styles.text}>🎤 Join the React Native Audio Room 🎧</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
         fontSize:30,
         paddingVertical:10,
         textAlign:'center',
         paddingHorizontal:10
    },
    nextContainer:{
        backgroundColor:'#7bbce8',
        marginHorizontal:15,
        borderRadius:15
    }
 
});