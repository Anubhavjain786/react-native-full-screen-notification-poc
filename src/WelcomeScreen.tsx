import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
const WelcomeScreen = () => {
  return (
    <View style={tw`h-full flex-1 items-center justify-center bg-red-400`}>
      <Text
        style={tw`text-red-400 text-4xl text-center text-white font-medium`}>
        Welcome to Squareboat
      </Text>
      <Image
        source={require('../assets/bike.jpeg')}
        style={tw`max-w-xs my-20`}
      />
      <View style={tw`flex-row gap-5`}>
        <TouchableOpacity>
          <Text
            style={tw`bg-white px-5 py-2 bg-white text-red-400 font-medium text-xl rounded-lg`}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={tw`bg-white px-5 py-2 bg-white text-red-400 font-medium text-xl rounded-lg`}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
