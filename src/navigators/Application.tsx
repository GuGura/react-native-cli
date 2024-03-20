import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator.tsx';

export default function Application() {
  //TODO: const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {/*TODO: {isLoggedIn? <BottomTabNavigator /> : <AuthNavigator /> }*/}
      <AuthNavigator />
    </NavigationContainer>
  );
}
