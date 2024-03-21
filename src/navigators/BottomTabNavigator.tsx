import Login from '../screens/auth/Login.tsx';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import ForgotPassword from '../screens/auth/ForgotPassword.tsx';
import Register from '../screens/auth/Register.tsx';
import BackButton from '../components/UI/BackButton.tsx';
import Logout from '../assets/icons/icon-log-out.svg';
import {Alert, TouchableOpacity} from 'react-native';
import {useLogout} from '../hooks/auth.ts';

const Stack = createNativeStackNavigator<any>();

function logoutHandler(onLogout: any) {
  Alert.alert('Logout', 'Are you sure you want to logout?', [
    {
      text: 'Yes',
      onPress: async () => {
        onLogout();
      },
    },
    {
      text: 'No',
      onPress: () => console.log('Cancel Pressed'),
    },
  ]);
}

export default function BottomTabNavigator() {
  const {onLogout} = useLogout();
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
          headerRight: () => (
            <TouchableOpacity onPress={() => logoutHandler(onLogout)}>
              <Logout width={30} height={30} style={{marginRight: 10}} />
            </TouchableOpacity>
          ),
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
              title={'Forgot text'}
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
