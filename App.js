import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './src/HomeScreen';
import { CallScreen } from './src/CallScreen';
import { StreamVideo,StreamVideoClient } from '@stream-io/video-react-native-sdk';

const apiKey = 'mmhfdzb5evj2'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0Nhcm5vcl9KYXgiLCJ1c2VyX2lkIjoiQ2Fybm9yX0pheCIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzI2Mzk2NDQ0LCJleHAiOjE3MjcwMDEyNDR9.8lWWLH4jVRFdOFHeR3bKokYWoHkleZdIrciPE0ZszHM'; // the token can be found in the "Credentials" section
const userId = 'Carnor_Jax'; // the user id can be found in the "Credentials" section
const callId = 'sanHKFdWxOsz'; // the call id can be found in the "Credentials" section

const user = {
    id: userId,
    name: 'Carnor_Jax',
    image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
  };

  const client = StreamVideoClient.getOrCreateInstance({ apiKey, user, token });

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
        {activeScreen === 'call-screen' ? (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        ) : (
          <HomeScreen goToCallScreen={goToCallScreen} />
        )}
      </SafeAreaView>
    </StreamVideo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});