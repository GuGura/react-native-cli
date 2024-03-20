import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import EYE from '../assets/icons/icon-eye.svg';
import EYEOFF from '../assets/icons/icon-eye-off.svg';
type Props = {
  label?: string;
  style?: any;
  invalid?: boolean;
} & TextInputProps;

export default function Input({style, label, invalid, ...props}: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(
    props.textContentType === 'password',
  );
  let labelStyle: any = [];
  let containerStyles: any = [styles.container];
  let iconStyle: any = [styles.icon];

  if (label) {
    labelStyle.push(styles.labelText);
    containerStyles.push(styles.height65);
    iconStyle.push(styles.labelIcon);
  } else {
    containerStyles.push({justifyContent: 'center'});
  }

  if (invalid) {
    containerStyles.push({borderColor: COLORS.danger});
  }

  return (
    <View style={[...containerStyles, style, isFocus ? styles.isFocus : null]}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        maxLength={props.textContentType === 'password' ? 15 : 254}
        secureTextEntry={isSecure}
        style={[styles.inputDefault]}
        autoCapitalize={'none'}
        autoCorrect={false}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
      {props.textContentType === 'password' &&
        (isSecure ? (
          <EYE
            width={20}
            height={20}
            style={iconStyle}
            onPress={() => setIsSecure(false)}
          />
        ) : (
          <EYEOFF
            width={20}
            height={20}
            style={iconStyle}
            onPress={() => setIsSecure(true)}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    width: '100%',
  },
  labelText: {
    marginTop: 10,
    color: COLORS.black,
    fontSize: 10,
    marginBottom: 5,
  },
  inputDefault: {
    padding: 0,
    textAlignVertical: 'center',
    height: 22,
    color: COLORS.black,
  },
  height65: {
    height: 65,
  },
  isFocus: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  isErr: {
    borderColor: COLORS.danger,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  labelIcon: {
    top: '50%',
  },
});
