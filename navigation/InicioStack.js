import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/inicio/Home'

const Stack = createNativeStackNavigator();

export default function InicioStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home-screen"
                component={Home}
                options={{ title: "Inicio" }}
            />
        </Stack.Navigator>
    );
}