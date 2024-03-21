import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LoadingOverlay({message}: {message: string}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
