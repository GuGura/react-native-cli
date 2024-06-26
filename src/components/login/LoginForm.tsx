import {StyleSheet, View} from 'react-native';
import Input from '../UI/Input.tsx';
import Button from '../UI/Button.tsx';
import {COLORS} from '../../constants';
import React, {useState} from 'react';

export default function LoginForm({
  onLogin,
}: {
  onLogin: ({email, password}: {email: string; password: string}) => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidate, setIsValidate] = useState({
    email: false,
    password: false,
  });

  function emailHandler(text: string) {
    if (email.length > 0) {
      setIsValidate({...isValidate, email: false});
    }
    setEmail(text);
  }

  function pwdHandler(text: string) {
    if (password.length > 0) {
      setIsValidate({...isValidate, password: false});
    }
    setPassword(text);
  }

  async function submitHandler() {
    const validate = isValidate;
    if (email.length === 0) {
      validate.email = true;
    }
    if (password.length === 0) {
      validate.password = true;
    }
    setIsValidate({...validate});

    if (Object.values(validate).every(item => !item)) {
      await onLogin({email, password});
    }
  }

  return (
    <>
      <View style={styles.inputs}>
        <Input
          placeholder={'Email'}
          value={email}
          onChangeText={emailHandler}
          invalid={isValidate.email}
        />
        <Input
          placeholder={'Password'}
          textContentType={'password'}
          value={password}
          onChangeText={pwdHandler}
          invalid={isValidate.password}
        />
      </View>
      <Button
        text={'Log in'}
        colors={[COLORS.gradientForm, COLORS.primary]}
        onPress={submitHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputs: {
    width: '100%',
    paddingTop: 15,
  },
});
