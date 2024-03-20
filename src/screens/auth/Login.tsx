import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, ROUTES} from '../../constants';
import GHOST from '../../assets/icons/ghost.svg';
import ICON from '../../assets/icons/icon-kakaotalk-light.svg';
import Input from '../../components/Input.tsx';

export default function Login({navigation}: any): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.row}>
          <GHOST width={80} height={80} />
          <Text style={styles.brandName}>Ghost</Text>
        </View>
        <Text style={styles.loginContinueTxt}>Login in to join Ghost!</Text>
        <View style={styles.inputs}>
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
        </View>
        <View style={styles.loginBtnWrapper}>
          <LinearGradient
            colors={[COLORS.gradientForm, COLORS.primary]}
            style={styles.linearGradient}
            start={{y: 0.0, x: 0.0}}
            end={{y: 1.0, x: 0.0}}>
            <TouchableOpacity
              onPress={() => {
                console.log('log');
              }}
              activeOpacity={0.7}
              style={styles.loginBtn}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.FORGOT_PASSWORD);
          }}>
          <Text style={styles.forgotPassText}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.kakaoWrapper}>
          <TouchableOpacity style={styles.kakaoBtn}>
            <ICON width={30} height={30} style={styles.kakaoIcon} />
            <Text style={styles.kakaoText}>KaKao</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.REGISTER);
          }}
          activeOpacity={0.8}>
          <Text style={styles.signupBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
    marginLeft: 10,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,

    fontWeight: 'bold',
  },
  loginBtnWrapper: {
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
  inputs: {
    width: '100%',
    paddingTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    width: '100%',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  kakaoWrapper: {
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
  kakaoBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: COLORS.yellow,
    marginTop: 20,
    borderRadius: 999,
  },
  kakaoText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '700',
  },
  kakaoIcon: {
    position: 'absolute',
    left: 30,
  },
  footer: {
    bottom: 20,
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
