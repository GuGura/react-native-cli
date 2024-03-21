import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator.tsx';

import AuthenticatedNavigator from './AuthenticatedNavigator.tsx';
import AuthProvider from '../constants/provider/AuthProvider.tsx';
import {useUsers} from '../hooks/auth.ts';

export default function Application() {
  const user = useUsers();
  return (
    <AuthProvider>
      <NavigationContainer>
        {user?.token ? <AuthenticatedNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthProvider>
  );
}
