import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import React from 'react';

export default function SecondButton({
  onPress,
  txt,
}: {
  onPress: () => void;
  txt: string;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.forgotPassText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
