import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator.tsx';

import AuthenticatedNavigator from './AuthenticatedNavigator.tsx';
import AuthProvider from '../constants/provider/AuthProvider.tsx';
import {useUsers} from '../hooks/auth.ts';
import LoadingOverlay from '../components/UI/LoadingOverlay.tsx';

export default function Application() {
  const {user, isPending} = useUsers();
  if (isPending) {
    return <LoadingOverlay message={'Loading...'} />;
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        {user?.token ? <AuthenticatedNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthProvider>
  );
}
