import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS, ROUTES} from '../constants';
import BackButton from '../components/UI/BackButton.tsx';
import Logout from '../assets/icons/icon-log-out.svg';
import IconHome from '../assets/icons/icon-home.svg';
import IconHistory from '../assets/icons/icon-inbox.svg';
import IconMyPage from '../assets/icons/icon-user.svg';
import IconRooms from '../assets/icons/ghostBottom.svg';
import {useLogout} from '../hooks/auth.ts';
import {
  Home,
  History,
  MyPage,
  Rooms,
  WaitingRoom,
  Play,
} from '../screens/index';
import SecondButton from '../components/UI/SecondButton.tsx';
import CreateRoom from '../screens/play/CreateRoom.tsx';
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
      <Stack.Screen
        name={ROUTES.CREATE_ROOM}
        component={CreateRoom}
        options={({navigation}) => ({
          headerTintColor: 'black',
          title: '',
          headerBackTitleVisible: false,
          headerShadowVisible: false, // applied here
          headerLeft: ({tintColor}) => (
            <BackButton
              navigation={navigation}
              tintColor={tintColor}
              title={'대기방 생성'}
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
              <Logout width={30} height={30} style={styles.rightIcon} />
            </TouchableOpacity>
          ),
          headerTintColor: 'black',
          headerTitle: '',
          headerShadowVisible: false, // applied here
          headerLeft: () => <Text style={styles.leftTitle}>Home</Text>,
          tabBarIcon: ({color, size}) => (
            <IconHome width={size} height={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name={ROUTES.ROOMS}
        component={Rooms}
        options={({navigation}) => ({
          tabBarIcon: ({color, size}) => (
            <IconRooms width={size} height={size} color={color} />
          ),
          headerRight: () => {
            return (
              <View style={styles.container}>
                <SecondButton
                  txt={'생성'}
                  onPress={() => navigation.navigate(ROUTES.CREATE_ROOM)}
                  style={styles.rightButton}
                />
              </View>
            );
          },
        })}
      />
      <Bottom.Screen
        name={ROUTES.HISTORY}
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconHistory width={size} height={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name={ROUTES.MY_PAGE}
        component={MyPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMyPage width={size} height={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({
  leftTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightIcon: {
    marginRight: 10,
  },
  rightButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 10,
    borderRadius: 5,
    marginTop: 0,
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
});
