import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/RootStackParamsList";

export const Exemplo = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.push("PushExemple")}>
                <Text>
                    Exemplo de Push
                </Text>
            </TouchableOpacity>


        </View >
    );
}