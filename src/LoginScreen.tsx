import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
const LoginScreen = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  return (
    <View style={tw`h-full flex-1 items-center justify-center`}>
      <Text style={tw`text-4xl font-medium text-red-400`}>Sign In</Text>
      <View style={tw`px-10 w-full mt-10 gap-8`}>
        <TextInput
          style={tw`rounded-xl shadow text-lg w-full px-3 bg-white`}
          placeholder="Enter Email"
          onFocus={() => setTogglePassword(true)}
        />
        <View style={tw`flex-row items-center mb-5`}>
          <TextInput
            style={tw`rounded-xl text-lg shadow w-full px-3 bg-white`}
            placeholder="Enter Password"
            secureTextEntry={togglePassword}
          />
          <Text
            onPress={() => setTogglePassword(!togglePassword)}
            style={tw`absolute right-3`}>
            {togglePassword ? 'show' : 'hide'}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={tw`bg-red-400 text-white px-5 text-center shadow py-2 font-medium text-xl rounded-lg`}>
            SignIn
          </Text>
        </TouchableOpacity>
        <Text style={tw`text-lg mt-5 text-center`}>
          Already have an account? <Text style={tw`text-blue-500`}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
