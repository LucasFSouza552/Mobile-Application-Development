import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashView } from "./SplashView";
import { ItemView } from "./ItemView";
import { RootStackParamsList } from "../types/RootStackParamsList";
import { Exemplo } from "./Exemple";

export const StackNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamsList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashView">
                <Stack.Screen name="SplashView" component={SplashView} />
                <Stack.Screen name="ItemView" component={ItemView} />
                <Stack.Screen name="PushExemple" component={Exemplo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}