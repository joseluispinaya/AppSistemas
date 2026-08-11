import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Historia from '../screens/Historia/Historia'

const Stack = createNativeStackNavigator();

export default function HistoriaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="historia-screen"
                component={Historia}
                options={{ title: "Historia" }}
            />
        </Stack.Navigator>
    );
}