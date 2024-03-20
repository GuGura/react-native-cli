import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ICON from '../../assets/icons/icon-chevron-left.svg';
import React from 'react';
import {COLORS} from '../../constants';

type BackButtonProps = {
  navigation: any;
  tintColor?: string;
  title: string;
};

export default function BackButton({
  navigation,
  tintColor,
  title,
}: BackButtonProps) {
  return (
    <View style={styles.backBtnWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ICON
          width={24}
          height={24}
          color={tintColor ?? 'black'}
          style={styles.backBtn}
        />
      </TouchableOpacity>
      <Text style={styles.backTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    top: Platform.select({ios: 0, android: 2}),
    position: 'relative',
  },
  backTitle: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '700',
  },
});
