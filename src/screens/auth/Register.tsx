import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import Input from '../../components/UI/Input.tsx';
import Button from '../../components/UI/Button.tsx';

import {useSignUp} from '../../hooks/auth.ts';
import LoadingOverlay from '../../components/UI/LoadingOverlay.tsx';

export default function Register() {
  const {mutate, isPending} = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isValidate, setIsValidate] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function emailHandler(text: string) {
    if (emailRegex?.test(email)) {
      setIsValidate({...isValidate, email: false});
    }
    setEmail(text);
  }
  function passwordHandler(text: string) {
    if (text.length > 5) {
      setIsValidate({...isValidate, password: false});
    }
    setPassword(text);
  }
  function passwordConfirmHandler(text: string) {
    if (password === text) {
      setIsValidate({...isValidate, passwordConfirm: false});
    }
    setPasswordConfirm(text);
  }

  async function onSubmitHandler() {
    const validate = isValidate;
    if (!emailRegex?.test(email)) {
      validate.email = true;
    }
    if (password?.length < 6) {
      validate.password = true;
    }
    if (password !== passwordConfirm || passwordConfirm?.length === 0) {
      validate.passwordConfirm = true;
    }
    setIsValidate({...validate});
    if (Object.values(validate).every(item => !item)) {
      await mutate({email, password});
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        {isPending && <LoadingOverlay message={'Signing up...'} />}
        <View style={styles.container}>
          <Text style={styles.TitleTxt}>Sign Up to join Ghost!</Text>
          <Input
            placeholder={'Email'}
            label={'Email'}
            value={email}
            onChangeText={emailHandler}
            invalid={isValidate.email}
          />
          <Input
            placeholder={'Password'}
            label={'Password'}
            textContentType={'password'}
            value={password}
            onChangeText={passwordHandler}
            invalid={isValidate.password}
          />
          <Input
            placeholder={'Password Confirm'}
            label={'Password Confirm'}
            textContentType={'password'}
            value={passwordConfirm}
            onChangeText={passwordConfirmHandler}
            invalid={isValidate.passwordConfirm}
          />
          <Button
            onPress={onSubmitHandler}
            text={'Submit'}
            colors={[COLORS.gradientForm, COLORS.primary]}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.white,
    flex: 1,
    position: 'relative',
  },
  container: {
    padding: 20,
  },
  TitleTxt: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
