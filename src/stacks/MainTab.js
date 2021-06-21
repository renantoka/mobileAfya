import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Dash from '../screens/Dash';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Patient from '../screens/Patient';
import RegisterClient from '../screens/RegisterClient';
import Address from '../screens/Address';
import PatientsAll from '../screens/PatientsAll';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Dash" component={Dash} />
        <Tab.Screen name="Paciente" component={Patient} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Endereco" component={Address} />
        <Tab.Screen name="RegistrarCliente" component={RegisterClient} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="TodosPacientes" component={PatientsAll} />
    </Tab.Navigator>
)