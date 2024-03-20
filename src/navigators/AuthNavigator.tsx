import Login from '../screens/auth/Login.tsx';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import ForgotPassword from '../screens/auth/ForgotPassword.tsx';
import Register from '../screens/auth/Register.tsx';
import BackButton from '../components/UI/BackButton.tsx';
const Stack = createNativeStackNavigator<any>();
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
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
            <BackButton
              navigation={navigation}
              tintColor={tintColor}
              title={'Forgot Password'}
            />
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
          headerShadowVisible: false, // applied here
          headerLeft: ({tintColor}) => (
            <BackButton
              navigation={navigation}
              tintColor={tintColor}
              title={'Sign Up'}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
