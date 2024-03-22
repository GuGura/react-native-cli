import {Text, View} from 'react-native';
import React from 'react';
import Button from '../components/UI/Button.tsx';
import {ROUTES} from '../constants';

export default function Rooms({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Rooms</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.WAITING_ROOM)}
        text={'Waiting Room'}
        colors={['red', 'red']}
      />
      <Button
        onPress={() => navigation.navigate(ROUTES.PLAY)}
        text={'play'}
        colors={['red', 'red']}
      />
    </View>
  );
}
