import React, {useEffect} from 'react';
import {
  Alert,
  Button,
  Image,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {
  requestUserPermission,
  getToken1,
  notificationListener,
} from './utils/commonUtils';
import messaging from '@react-native-firebase/messaging';
const WelcomeScreen = ({navigation}: any) => {
  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      console.log('called');
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      navigation.navigate('login', {message: JSON.stringify(remoteMessage)});
      console.log('Asdsdasd');
    });
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
    // <View style={tw`h-full flex-1 items-center justify-center bg-red-400`}>
    //   <Text
    //     style={tw`text-red-400 text-4xl text-center text-white font-medium`}>
    //     Welcome to Squareboat
    //   </Text>
    //   <Image
    //     source={require('../assets/bike.jpeg')}
    //     style={tw`max-w-xs my-20`}
    //   />
    //   <View style={tw`flex-row gap-5`}>
    //     <TouchableOpacity onPress={() => navigation.navigate('login')}>
    //       <Text
    //         style={tw`bg-white px-5 py-2 bg-white text-red-400 font-medium text-xl rounded-lg`}>
    //         Login
    //       </Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity>
    //       <Text
    //         style={tw`bg-white px-5 py-2 bg-white text-red-400 font-medium text-xl rounded-lg`}>
    //         SignUp
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <Text style={tw`text-5xl`}>Welcome</Text>
  );
};

export default WelcomeScreen;
