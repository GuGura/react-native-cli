import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import Input from '../../components/Input.tsx';
import Button from '../../components/UI/Button.tsx';

export default function Register({navigation}: {navigation: any}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isValidate, setIsValidate] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function nameHandler(text: string) {
    if (text.length > 4) {
      setIsValidate({...isValidate, name: false});
    }
    setName(text);
  }

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

  function onSubmitHandler() {
    console.log(name, email, password, passwordConfirm);

    const validate = isValidate;
    if (name?.length < 3) {
      validate.name = true;
    }
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
      console.log('submit');
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.TitleTxt}>Sign Up to join Ghost!</Text>
          <Input
            placeholder={'Name'}
            label={'Name'}
            value={name}
            onChangeText={nameHandler}
            invalid={isValidate.name}
          />
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
