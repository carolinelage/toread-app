import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Button } from 'react-native-paper';
import estilo from './estilo';
import { User, UserProps } from '../User';
import { BookFeed } from '../BookFeed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AuthResponse = {
  params:{
    access_token: string;
  };
  type: string;
}

export function Login({ navigation }) {

  const [ userData, setUserData ] = useState<UserProps>({} as UserProps);

  async function handleGoogleSignIn(){
    try {
      
      const CLIENT_ID = "875469706013-33aqemn30b8cu96d46ifg6d4onj3brqu.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@eucomamor/toread-app";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      
      if(params.access_token != null && type === 'success'){

        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const user = await response.json();

        
        setUserData(user);

        //Redireciona para App
        navigation.replace('TabNav');
      }else{
        const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      }
    } catch (error){
      console.log(error);

    }
  }

  return (
    <View style={estilo.container}>
      <Button 
        icon="google" 
        mode="elevated"
        onPress={handleGoogleSignIn}>
        Logar com o Google
      </Button>

      {/* <User user={userData} /> */}
    </View>
  )
}

