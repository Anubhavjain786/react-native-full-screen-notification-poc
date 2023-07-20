import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
const LoginScreen = ({navigation, route}: any) => {
  const {message} = route.params;
  return (
    <View style={tw`h-full flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl font-medium`}>
        Message: {message}
      </Text>
      <View style={tw`px-10 w-full mt-10 gap-8`}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={tw`bg-red-400 text-white px-5 text-center shadow py-2 font-medium text-xl rounded-lg`}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
