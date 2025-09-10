import { useNavigation } from "@react-navigation/native";
import {
    View,
    Image,
} from 'react-native';
import { NativeStackNavigationProp, } from "@react-navigation/native-stack";
import { RootStackParamsList } from '../types/RootStackParamsList';
import { useEffect } from "react";

export const SplashView = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("ItemView");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 300, height: 200 }}
                source={require("../../assets/splash-icon.png")} />
        </View>
    );


}

