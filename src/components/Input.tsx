import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

type Props = {
  label?: string;
  style?: any;
  invalid?: boolean;
} & TextInputProps;

export default function Input({style, label, ...props}: Props) {
  let labelStyle: any = [];
  let containerStyles: any = [styles.container];

  if (label) {
    labelStyle.push(styles.labelText);
    containerStyles.push(styles.height65);
  } else {
    containerStyles.push({justifyContent: 'center'});
  }

  return (
    <View style={[...containerStyles, style]}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <TextInput {...props} style={[styles.inputDefault]} />
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
    fontSize: 13,
    marginBottom: 5,
  },
  inputDefault: {
    padding: 0,
    textAlignVertical: 'top',
    height: 22,
    color: COLORS.black,
  },
  height65: {
    height: 65,
  },
});
