import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import ForgotPassword from '../screens/auth/ForgotPassword.tsx';
import Register from '../screens/auth/Register.tsx';
import BackButton from '../components/UI/BackButton.tsx';
import Logout from '../assets/icons/icon-log-out.svg';
import {Alert, TouchableOpacity} from 'react-native';
import {useLogout} from '../hooks/auth.ts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.tsx';
import Rooms from '../screens/Rooms.tsx';
import History from '../screens/History.tsx';
import MyPage from '../screens/MyPage.tsx';
import WaitingRoom from '../screens/play/WaitingRoom.tsx';
import Play from '../screens/play/Play.tsx';

const Stack = createNativeStackNavigator<any>();
const Bottom = createBottomTabNavigator<any>();
export default function AuthenticatedNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_TAB}
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={ROUTES.HOME_TAB}
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.WAITING_ROOM}
        component={WaitingRoom}
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
        name={ROUTES.PLAY}
        component={Play}
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

function BottomNavigator() {
  const {onLogout} = useLogout();
  function logoutHandler() {
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
  return (
    <Bottom.Navigator initialRouteName={ROUTES.HOME}>
      <Bottom.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={logoutHandler}>
              <Logout width={30} height={30} style={{marginRight: 10}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Bottom.Screen name={ROUTES.ROOMS} component={Rooms} />
      <Bottom.Screen name={ROUTES.HISTORY} component={History} />
      <Bottom.Screen name={ROUTES.MY_PAGE} component={MyPage} />
    </Bottom.Navigator>
  );
}
