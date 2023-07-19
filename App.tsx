import {useEffect} from 'react';
import LoginScreen from './src/LoginScreen';
import WelcomeScreen from './src/WelcomeScreen';
import {Alert, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  getToken1,
  notificationListener,
  requestUserPermission,
} from './src/utils/commonUtils';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('Asdsdasd');
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    requestUserPermission();
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    ).then(() => {
      getToken1();
    });
    notificationListener();
  }, []);

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      <Text>Welcome</Text>
    </>
  );
};

export default App;
