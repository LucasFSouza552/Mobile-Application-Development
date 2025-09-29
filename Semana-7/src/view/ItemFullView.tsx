import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/RootStackParamsList";
import Item from "../models/item";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import ToggleTheme from "./components/ToggleTheme";
import { Ionicons } from "@expo/vector-icons";


export const ItemFullView = () => {

    const { colors } = useTheme();

    const styles = useResponsiveStyles();

    const route = useRoute();
    const { item } = route.params as { item: Item };

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={50} color={colors.tertiary} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: colors.tertiary }]}>Editando Item</Text>
                <ToggleTheme />
            </View>

            <View style={styles.cardItem}>
                {item?.image && (
                    <Image source={{ uri: item.image }} style={styles.image} />
                )}
                <Text style={[styles.subTitle,{ color: colors.tertiary }]}>
                    {item.title}
                </Text>

                
            </View>
            {/* <TouchableOpacity
                onPress={() => navigation.push("")}>
                <Text>
                    Exemplo de Push
                </Text>
            </TouchableOpacity> */}


        </SafeAreaView >
    );
}

const useResponsiveStyles = () => {
    const { width, height } = useWindowDimensions();
    const base = Math.min(width, height);

    const responsiveFont = (size: number, maxSize: number = 24) =>
        Math.min(Math.round(size * (base / 375)), maxSize);

    const imgSize = Math.min(width * 0.25, 300);
    const addBtnSize = Math.min(width * 0.12, 60);
    const paddingSize = Math.min(width * 0.015, 16);

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: paddingSize,
        },
        title: {
            fontSize: responsiveFont(20, 28),
            fontWeight: 'bold',
        },
        subTitle: {
            fontSize: responsiveFont(16, 18),
            fontWeight: 'bold',
            marginTop: Math.min(width * 0.015, 16),
        },
        addButton: {
            width: addBtnSize,
            height: addBtnSize,
            borderRadius: addBtnSize / 2,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: Math.min(width * 0.05, 30),
            bottom: Math.min(height * 0.05, 30),
        },
        item: {
            padding: Math.min(width * 0.035, 20),
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            flexDirection: 'row',
            alignItems: 'center',
        },
        image: {
            width: imgSize,
            height: imgSize,
            borderRadius: imgSize / 6,
            marginRight: Math.min(width * 0.025, 10),
        },
        cardItem: {
            padding: Math.min(width * 0.035, 20),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flex: 1,
        },
        modalOverlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        dialog: {
            width: '80%',
            padding: Math.min(width * 0.05, 20),
            margin: Math.min(width * 0.05, 20),
            borderRadius: 8,
            backgroundColor: 'white',
        },
        modalTitle: {
            fontSize: responsiveFont(18, 24),
            fontWeight: 'bold',
            marginBottom: Math.min(height * 0.02, 16),
            textAlign: 'center',
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: Math.min(width * 0.03, 12),
            marginBottom: Math.min(height * 0.02, 16),
            borderRadius: 4,
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: Math.min(height * 0.02, 16),
        },
        button: {
            flex: 1,
            padding: Math.min(width * 0.025, 12),
            marginHorizontal: Math.min(width * 0.01, 6),
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: '#ddd',
        },
        buttonText: {
            fontSize: responsiveFont(16, 20),
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Arial',
        },
        deleteButton: {
            backgroundColor: '#ffebee',
        },
        deleteButtonText: {
            color: '#d32f2f',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: Math.min(height * 0.02, 16),
        },
    });
};