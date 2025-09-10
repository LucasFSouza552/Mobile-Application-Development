import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashView } from "./SplashView";
import { ItemView } from "./ItemView";
import { RootStackParamsList } from "../types/RootStackParamsList";

export const StackNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamsList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashView">
                <Stack.Screen name="SplashView" component={SplashView} />
                <Stack.Screen name="ItemView" component={ItemView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}