import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InicioStack from './InicioStack';
import HistoriaStack from './HistoriaStack'
import AccountStack from './AccountStack'
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
            case "home":
                iconName = "home";
                break;
            case "historia":
                iconName = "newspaper";
                break;
            case "account":
                iconName = "person";
                break;
            default:
                iconName = "help-circle";
                break;
        }
        return (
            <Ionicons
                name={iconName}
                size={24}
                color={color}
            />
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: "#442484",
                    tabBarInactiveTintColor: "#a17dc3",
                    headerShown: false
                })}
            >
                <Tab.Screen name="home" component={InicioStack} options={{ title: "Inicio" }} />
                <Tab.Screen name="historia" component={HistoriaStack} options={{ title: "Historia" }} />
                <Tab.Screen name="account" component={AccountStack} options={{ title: "Cuenta" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}