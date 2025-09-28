import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
    Image,
    StyleSheet,
} from 'react-native';

import { useItemController } from "../controllers/itemController";
import Item from "../models/item";

import { useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/RootStackParamsList";
import { useNavigation } from "expo-router";
import ToggleTheme from "./components/ToggleTheme";
import { FormModalItem } from "./components/FormModalItem";

export const ItemView = () => {

    const { colors } = useTheme();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const ItemController = useItemController();

    const {
        items,
        openAddModal,
        openEditModal
    } = ItemController;

    const renderItem = ({ item }: { item: Item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => openEditModal(item)}
            >
                {item?.image && (
                    <Image source={{ uri: item.image }} style={styles.image} />
                )}

                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de Itens</Text>
                <ToggleTheme />
            </View>

            <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]} onPress={openAddModal}>
                <Text style={styles.buttonText}>Adicionar Item</Text>
            </TouchableOpacity>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <FormModalItem {...ItemController} />
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        color: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#ddd',
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 10
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 8,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#ddd',
        padding: 8,
        flex: 1,
        marginHorizontal: 4,
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    deleteButton: {
        backgroundColor: '#ffebee',
    },
    deleteButtonText: {
        color: '#d32f2f',
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20
    }
});
