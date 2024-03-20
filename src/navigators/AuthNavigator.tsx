import Login from '../screens/auth/Login.tsx';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS, ROUTES} from '../constants';
import ForgotPassword from '../screens/auth/ForgotPassword.tsx';
import Register from '../screens/auth/Register.tsx';
import {
  Pressable,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ICON from '../assets/icons/icon-chevron-left.svg';
const Stack = createNativeStackNavigator<any>();
export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({navigation}) => ({
          headerTintColor: 'black',
          title: '',
          headerBackTitleVisible: false,
          headerLeft: ({tintColor}) => (
            <View style={styles.backBtnWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ICON
                  width={24}
                  height={24}
                  color={tintColor}
                  style={styles.backBtn}
                />
              </TouchableOpacity>
              <Text style={styles.backTitle}>FindPassword</Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={({navigation}) => ({
          headerTintColor: 'black',
          title: '',
          headerBackTitleVisible: false,
          headerLeft: ({tintColor}) => (
            <View style={styles.backBtnWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ICON
                  width={24}
                  height={24}
                  color={tintColor}
                  style={styles.backBtn}
                />
              </TouchableOpacity>
              <Text style={styles.backTitle}>Sign Up</Text>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
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
