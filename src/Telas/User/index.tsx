import React from 'react';
import { View } from 'react-native';

import { Avatar, Text } from 'react-native-paper';

export type UserProps = {
  name: string;
  email: string;
  picture: string;
}
type Props = {
  user: UserProps;
}

export function User({ user }: Props) {
  return (
    <View>
        <Avatar.Image size={50} source={{uri: user.picture}} />
        <Text variant="displayLarge">{user.name}</Text>
        <Text variant="displayLarge">{user.email}</Text>
    </View>
  )
}
