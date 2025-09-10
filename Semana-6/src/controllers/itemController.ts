import { useEffect, useState } from "react";
import Item from "../models/item";
import { Alert } from "react-native";
import ItemService from "../services/itemService";

export const useItemController = () => {

    const [items, setItems] = useState<Item[]>([]);

    const [editingItem, setEditingItem] = useState<Item | null>(null);
    const [inputText, setInputText] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setInputText('');
        setEditingItem(null);
        setModalVisible(false);
    };

    const openAddModal = () => {
        setInputText('');
        setEditingItem(null);
        setModalVisible(true);
    };

    const openEditModal = (item: Item) => {
        setInputText(item.title);
        setEditingItem(item);
        setModalVisible(true);
    };

    const addItem = () => {
        if (!inputText.trim()) {
            Alert.alert('Erro', 'Digite um título');
            return;
        }

        ItemService.addItem(inputText.trim());
        setItems([...ItemService.getAllItems()])
        console.log("Adicionar novo item")
        closeModal();
    };


    const updateItem = () => {
        if (!inputText.trim() || !editingItem) {
            Alert.alert('Erro', 'Digite um título');
            return;
        }

        const updateItem: Item = { id: editingItem.id, title: inputText.trim() };
        ItemService.updateItem(updateItem);
        setItems([...ItemService.getAllItems()])
        closeModal();
    };

    const deleteItem = () => {
        if (!editingItem) return;

        ItemService.deleteItem(editingItem.id);
        setItems([...ItemService.getAllItems()])
        closeModal();
    };

    useEffect(() => {
        setItems([...ItemService.getAllItems()])
    }, [])

    return {
        items,
        setItems,
        editingItem,
        setEditingItem,
        inputText,
        setInputText,
        addItem,
        updateItem,
        deleteItem,
        modalVisible,
        closeModal,
        openAddModal,
        openEditModal

    }

}