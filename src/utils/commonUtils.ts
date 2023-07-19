import messaging from '@react-native-firebase/messaging';

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

export const getToken1 = async () => {
  try {
    console.log('##################=>', messaging().getToken());

    messaging()
      .getToken()
      .then(v => {
        console.log('this is token =>', v);
      })
      .catch(e => {
        console.log(e);
      });
  } catch (error) {
    console.log(error);
  }
};

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
