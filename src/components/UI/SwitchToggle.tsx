import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/colors.ts';
import Colors from '../../constants/colors.ts';

export default function SwitchToggle({
  isEnabled,
  toggleSwitch,
}: {
  isEnabled: boolean;
  toggleSwitch: any;
}) {
  const [animatedValue] = useState(new Animated.Value(isEnabled ? 1 : 0));
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isEnabled, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 17],
  });

  const color = isEnabled ? Colors.primary : Colors.gray;
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchTxt}>비공개</Text>
      <TouchableOpacity
        onPress={toggleSwitch}
        style={[styles.toggleContainer, {backgroundColor: color}]}>
        <Animated.View
          style={[styles.toggleWheel, {transform: [{translateX}]}]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switchTxt: {
    color: colors.gray,
  },
  toggleContainer: {
    width: 36,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  toggleWheel: {
    width: 18,
    height: 18,
    borderRadius: 99,
    backgroundColor: colors.white,
  },
});
