import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';
import MainTab from './src/stacks/MainTab';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </UserContextProvider>
  );
}