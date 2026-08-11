import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/acount/Account'

const Stack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="cuenta-screen"
                component={Account}
                options={{ title: "Cuenta" }}
            />
        </Stack.Navigator>
    );
}