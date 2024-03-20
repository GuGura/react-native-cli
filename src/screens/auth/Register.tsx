import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {COLORS} from '../../constants';

export default function Register({navigation}: {navigation: any}) {
  return (
    <View style={styles.screen}>
      <Text style={{color: 'black', fontSize: 40}}>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
