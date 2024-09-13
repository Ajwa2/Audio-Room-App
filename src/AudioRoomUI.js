import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AudioRoomDescription } from '../components/AudioRoomDescription';
import { AudioRoomParticipants } from '../components/AudioRoomParticipants';
import {AudioRoomControlsPanel} from '../components/AudioRoomControlsPanel';


export const AudioRoomUI = ({ goToHomeScreen }) => {
    return (
        <View style={styles.container}>
            <AudioRoomDescription />
            <AudioRoomParticipants />
            <AudioRoomControlsPanel />
            <Button title='Leave Audio Room' onPress={goToHomeScreen} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});