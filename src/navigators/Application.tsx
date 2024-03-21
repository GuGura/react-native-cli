import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator.tsx';
import {useUserStore} from '../store/userStore.ts';
import BottomTabNavigator from './BottomTabNavigator.tsx';
import AuthProvider from '../constants/provider/AuthProvider.tsx';
import {useUsers} from '../hooks/auth.ts';

export default function Application() {
  const {isAuthenticated} = useUserStore();
  const user = useUsers();
  return (
    <AuthProvider>
      <NavigationContainer>
        {user?.token ? <BottomTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthProvider>
  );
}
