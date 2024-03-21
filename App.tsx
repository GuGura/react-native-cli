/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Application from './src/navigators/Application.tsx';
import QueryProvider from './src/constants/provider/QueryProvider.tsx';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <QueryProvider>
        <Application />
      </QueryProvider>
    </>
  );
}
