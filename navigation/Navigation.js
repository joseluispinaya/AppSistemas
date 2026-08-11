import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InicioStack from './InicioStack';
import HistoriaStack from './HistoriaStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="home" component={InicioStack} options={{ title: "Inicio" }} />
                <Tab.Screen name="historia" component={HistoriaStack} options={{ title: "Historia" }} />
                <Tab.Screen name="account" component={AccountStack} options={{ title: "Cuenta" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}