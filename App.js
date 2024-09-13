import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './src/HomeScreen';
import { CallScreen } from './src/CallScreen';
import { StreamVideo,StreamVideoClient } from '@stream-io/video-react-native-sdk';

const apiKey = 'mmhfdzb5evj2'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0t5cF9EdXJyb24iLCJ1c2VyX2lkIjoiS3lwX0R1cnJvbiIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzI2MjAyMTIyLCJleHAiOjE3MjY4MDY5MjJ9.ovjHDdnthJ029sLW0H4fx3AIJJoshtfGjz8l6_24zzM'; // the token can be found in the "Credentials" section
const userId = 'Kyp_Durron'; // the user id can be found in the "Credentials" section
const callId = 'mhNUu0Z6zUtB'; // the call id can be found in the "Credentials" section

const user = {
    id: userId,
    name: 'John Malkovich',
    image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
  };

  const client = new StreamVideoClient({ apiKey, user, token });

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