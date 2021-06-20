import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import RegisterClient from '../screens/RegisterClient';

import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Cadastro" component={SignUp} />
        <Stack.Screen name="RegistrarCliente" component={RegisterClient} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);