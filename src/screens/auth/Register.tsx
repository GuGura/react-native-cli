import {Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

export default function Register({navigation}: {navigation: any}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 40}}>Register</Text>
    </View>
  );
}
