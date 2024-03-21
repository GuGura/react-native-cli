import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type ButtonProps = {
  onPress: () => void;
  text: string;
  colors: string[];
  disable?: boolean;
};

export default function Button({onPress, text, colors, disable}: ButtonProps) {
  return (
    <View style={[styles.btnWrapper, disable && styles.loading]}>
      <LinearGradient
        colors={colors}
        style={styles.linearGradient}
        start={{y: 0.0, x: 0.0}}
        end={{y: 1.0, x: 0.0}}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          disabled={disable}
          style={styles.btn}>
          <Text style={styles.btnTxt}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    opacity: 0.8,
  },
  btnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  btn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  btnTxt: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
});
