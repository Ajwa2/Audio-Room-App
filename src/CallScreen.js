import {
    useStreamVideoClient,
  } from '@stream-io/video-react-native-sdk';
  
  import { Call } from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
  
  export const CallScreen = ({goToHomeScreen, callId}) => {
  
    const [callState, setCallState] = useState(null);
    const client = useStreamVideoClient();
  
    const call = client?.call('audio_room', callId);
    useEffect(() => {
      if (call) {
        call
          .join({
            create: true,
            data: {
              members: [{user_id: 'john_smith'}, {user_id: 'jane_doe'}],
              custom: {
                title: 'React Native test',
                description: 'We are doing a test of react native audio rooms',
              },
            },
          })
          .then(() => call.goLive())
          .then(() => setCallState(call));
      }
  }, [call, client]);
  };